import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { MapboxMap } from "@/components/ui/mapbox-map";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { mockChargingStations } from "@/lib/mock-data";
import { 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Clock,
  LogOut,
  Home,
  Settings,
  BarChart3,
  Battery
} from "lucide-react";

const sidebarItems = [
  { title: "Overview", url: "/dashboard/station-owner", icon: Home },
  { title: "My Stations", url: "/dashboard/station-owner/stations", icon: Zap },
  { title: "Live View", url: "/dashboard/station-owner/live", icon: Battery },
  { title: "Revenue", url: "/dashboard/station-owner/revenue", icon: DollarSign },
  { title: "Reports", url: "/dashboard/station-owner/reports", icon: BarChart3 },
  { title: "Settings", url: "/dashboard/station-owner/settings", icon: Settings },
];

function StationOwnerSidebar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Sidebar className="w-64">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Station Owner</h2>
              <p className="text-xs text-sidebar-foreground/60">Sarah Johnson</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="w-full justify-start"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default function StationOwnerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [stations, setStations] = useState(mockChargingStations);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleStationAvailability = (stationId: string) => {
    setStations(prev => prev.map(station => 
      station.id === stationId 
        ? { 
            ...station, 
            availability: station.availability === "available" ? "maintenance" : "available" 
          }
        : station
    ));
  };

  const totalRevenue = 2840.30;
  const monthlyEarnings = 856.40;
  const activeStations = stations.filter(s => s.availability !== "maintenance").length;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <StationOwnerSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Station Control Center ⚡</h1>
                <p className="text-muted-foreground">
                  Manage your charging stations and monitor revenue
                </p>
              </div>
              <Button className="glow-primary">
                <Zap className="h-4 w-4 mr-2" />
                Add Station
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Stations</p>
                      <p className="text-2xl font-bold">{activeStations}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">${monthlyEarnings.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Session</p>
                      <p className="text-2xl font-bold">45m</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Station Map */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Station Network</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 rounded-lg overflow-hidden border border-border/50">
                    <MapboxMap 
                      className="w-full h-full"
                      stations={stations}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span>Occupied</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                        <span>Maintenance</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Charging Sessions */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Battery className="h-5 w-5 text-primary" />
                    <span>Live Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                  >
                    <div>
                      <h4 className="font-medium">DJI Mavic 3 Pro</h4>
                      <p className="text-sm text-muted-foreground">Brooklyn Bridge Hub</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">75% → 100%</p>
                      <p className="text-xs text-muted-foreground">ETA: 8 min</p>
                      <Badge variant="default">Charging</Badge>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                  >
                    <div>
                      <h4 className="font-medium">Autel EVO Lite+</h4>
                      <p className="text-sm text-muted-foreground">Central Park Station</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">12% → 80%</p>
                      <p className="text-xs text-muted-foreground">ETA: 22 min</p>
                      <Badge variant="default">Charging</Badge>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                  >
                    <div>
                      <h4 className="font-medium">Parrot Anafi</h4>
                      <p className="text-sm text-muted-foreground">Times Square Express</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Queue: Position 2</p>
                      <p className="text-xs text-muted-foreground">ETA: 15 min</p>
                      <Badge variant="secondary">Waiting</Badge>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </div>

            {/* My Stations */}
            <Card className="border-border/50 bg-card-gradient mt-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>My Stations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stations.map((station) => (
                    <div 
                      key={station.id}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{station.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {station.availableSlots}/{station.totalSlots} slots available • ${station.pricePerKwh}/kWh
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={
                            station.availability === "available" ? "default" : 
                            station.availability === "occupied" ? "secondary" : "outline"
                          }
                        >
                          {station.availability}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">Active</span>
                          <Switch 
                            checked={station.availability !== "maintenance"}
                            onCheckedChange={() => toggleStationAvailability(station.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}