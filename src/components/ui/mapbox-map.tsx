import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  className?: string;
  onMapLoad?: (map: mapboxgl.Map) => void;
  stations?: Array<{
    id: string;
    name: string;
    location: { lat: number; lng: number };
    availability: string;
    pricePerKwh: number;
  }>;
  drones?: Array<{
    id: string;
    location?: { lat: number; lng: number };
    status: string;
  }>;
  showRoute?: {
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  };
}

export function MapboxMap({ className, onMapLoad, stations = [], drones = [], showRoute }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with hardcoded token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Ymg3NDM4IiwiYSI6ImNtOXdwYnV1MTB6MDIyanI4dzFnbHBkMmQifQ.cZaZSs7rr_YvUgORGr9Kzw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-73.9712, 40.7831], // NYC
      zoom: 12,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      setMapLoaded(true);
      if (onMapLoad && map.current) {
        onMapLoad(map.current);
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [onMapLoad]);

  // Add station markers
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    // Remove existing station markers
    const existingMarkers = document.querySelectorAll('.station-marker');
    existingMarkers.forEach(marker => marker.remove());

    stations.forEach(station => {
      const el = document.createElement('div');
      el.className = 'station-marker';
      el.innerHTML = `
        <div class="w-8 h-8 bg-primary rounded-full border-2 border-background shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8A2 2 0 1116 4a2 2 0 012 4zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-semibold text-sm">${station.name}</h3>
          <p class="text-xs text-gray-600">${station.availability}</p>
          <p class="text-xs">$${station.pricePerKwh}/kWh</p>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat([station.location.lng, station.location.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });
  }, [mapLoaded, stations]);

  // Add drone markers
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    // Remove existing drone markers
    const existingMarkers = document.querySelectorAll('.drone-marker');
    existingMarkers.forEach(marker => marker.remove());

    drones.forEach(drone => {
      if (!drone.location) return;

      const el = document.createElement('div');
      el.className = 'drone-marker';
      el.innerHTML = `
        <div class="w-6 h-6 bg-accent rounded-full border-2 border-background shadow-lg flex items-center justify-center animate-pulse">
          <svg class="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      `;

      new mapboxgl.Marker(el)
        .setLngLat([drone.location.lng, drone.location.lat])
        .addTo(map.current!);
    });
  }, [mapLoaded, drones]);

  // Add route
  useEffect(() => {
    if (!mapLoaded || !map.current || !showRoute) return;

    const routeGeoJSON = {
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: [
          [showRoute.start.lng, showRoute.start.lat],
          [showRoute.end.lng, showRoute.end.lat]
        ]
      }
    };

    // Remove existing route
    if (map.current.getSource('route')) {
      map.current.removeLayer('route');
      map.current.removeSource('route');
    }

    // Add route
    map.current.addSource('route', {
      type: 'geojson',
      data: routeGeoJSON
    });

    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#06b6d4',
        'line-width': 4,
        'line-opacity': 0.8
      }
    });

    // Fit map to route
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend([showRoute.start.lng, showRoute.start.lat]);
    bounds.extend([showRoute.end.lng, showRoute.end.lat]);
    map.current.fitBounds(bounds, { padding: 50 });

  }, [mapLoaded, showRoute]);

  return <div ref={mapContainer} className={className} />;
}