import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapboxMap } from "@/components/ui/mapbox-map";
import { mockChargingStations, mockDrones } from "@/lib/mock-data";
import { Navigation } from "@/components/ui/navigation";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Zap, Battery, Play, Clock } from "lucide-react";

export default function StartMission() {
  const [selectedStart, setSelectedStart] = useState<{lat: number, lng: number} | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<{lat: number, lng: number} | null>(null);
  const [selectedDrone, setSelectedDrone] = useState<string | null>(null);
  const [showRoute, setShowRoute] = useState(false);
  const { toast } = useToast();

  const availableDrones = mockDrones.filter(d => d.status === "idle" && d.batteryLevel > 30);

  const handleStartMission = () => {
    if (!selectedStart || !selectedEnd || !selectedDrone) {
      toast({
        title: "Missing Information",
        description: "Please select start location, destination, and drone",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mission Started! 🚁",
      description: "Your drone is now en route to the destination",
    });

    // In a real app, this would start the actual mission
  };

  const quickLocations = [
    { name: "Central Park", coords: { lat: 40.7812, lng: -73.9665 } },
    { name: "Brooklyn Bridge", coords: { lat: 40.7061, lng: -73.9969 } },
    { name: "Times Square", coords: { lat: 40.7580, lng: -73.9855 } },
    { name: "Statue of Liberty", coords: { lat: 40.6892, lng: -74.0445 } },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Plan Your Mission 🎯</h1>
            <p className="text-muted-foreground">
              Select your route and drone to begin your flight
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Planning */}
            <div className="lg:col-span-1 space-y-6">
              {/* Drone Selection */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Battery className="h-5 w-5 text-primary" />
                    <span>Select Drone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {availableDrones.map((drone) => (
                    <div
                      key={drone.id}
                      onClick={() => setSelectedDrone(drone.id)}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedDrone === drone.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/50 hover:border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{drone.name}</h4>
                          <p className="text-sm text-muted-foreground">{drone.model}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{drone.batteryLevel}%</p>
                          <div className={`w-16 h-2 rounded-full ${
                            drone.batteryLevel > 60 ? 'bg-accent' : 
                            drone.batteryLevel > 30 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}>
                            <div 
                              className="h-full bg-current rounded-full"
                              style={{ width: `${drone.batteryLevel}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Locations */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Quick Locations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickLocations.map((location) => (
                    <Button
                      key={location.name}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        if (!selectedStart) {
                          setSelectedStart(location.coords);
                        } else {
                          setSelectedEnd(location.coords);
                          setShowRoute(true);
                        }
                      }}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {location.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Mission Summary */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Mission Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Estimated Distance:</span>
                    <span className="font-medium">
                      {selectedStart && selectedEnd ? "4.2 km" : "--"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Flight Time:</span>
                    <span className="font-medium">
                      {selectedStart && selectedEnd ? "12 min" : "--"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Battery Usage:</span>
                    <span className="font-medium">
                      {selectedStart && selectedEnd ? "~35%" : "--"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Charging Cost:</span>
                    <span className="font-medium">
                      {selectedStart && selectedEnd ? "$2.40" : "--"}
                    </span>
                  </div>
                  
                  <Button
                    onClick={handleStartMission}
                    disabled={!selectedStart || !selectedEnd || !selectedDrone}
                    className="w-full mt-4 glow-primary"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Mission
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card-gradient h-[600px]">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Mission Map</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full pb-0">
                  <div className="h-[500px] rounded-lg overflow-hidden border border-border/50">
                    <MapboxMap 
                      className="w-full h-full"
                      stations={mockChargingStations}
                      drones={availableDrones}
                      showRoute={showRoute && selectedStart && selectedEnd ? {
                        start: selectedStart,
                        end: selectedEnd
                      } : undefined}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span>Charging Stations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span>Available Drones</span>
                      </div>
                      {showRoute && (
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-1 bg-neon-cyan"></div>
                          <span>Planned Route</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Click on the map to set waypoints
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}