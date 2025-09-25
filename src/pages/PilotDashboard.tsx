import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapboxMap } from "@/components/ui/mapbox-map";
import { DroneIcon } from "@/components/ui/drone-icon";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { mockDrones, mockChargingStations, mockMissions } from "@/lib/mock-data";
import { 
  Battery, 
  MapPin, 
  Wallet, 
  History, 
  Plane, 
  Plus,
  LogOut,
  Home,
  Settings
} from "lucide-react";

const sidebarItems = [
  { title: "Overview", url: "/dashboard/pilot", icon: Home },
  { title: "My Drones", url: "/dashboard/pilot/drones", icon: Plane },
  { title: "Start Mission", url: "/dashboard/pilot/mission", icon: MapPin },
  { title: "Wallet", url: "/dashboard/pilot/wallet", icon: Wallet },
  { title: "History", url: "/dashboard/pilot/history", icon: History },
  { title: "Settings", url: "/dashboard/pilot/settings", icon: Settings },
];

function PilotSidebar() {
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
            <DroneIcon size="sm" className="text-primary" />
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Pilot Dashboard</h2>
              <p className="text-xs text-sidebar-foreground/60">Alex Chen</p>
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

export default function PilotDashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <PilotSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Pilot'}! ✈️</h1>
                <p className="text-muted-foreground">
                  Monitor your fleet and plan your next mission
                </p>
              </div>
              <Button className="glow-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Mission
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Drones</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Battery className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Battery</p>
                      <p className="text-2xl font-bold">69%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Missions Today</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Wallet className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Wallet Balance</p>
                      <p className="text-2xl font-bold">$156.75</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Live Map */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Live Map</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 rounded-lg overflow-hidden border border-border/50">
                    <MapboxMap 
                      className="w-full h-full"
                      stations={mockChargingStations}
                      drones={mockDrones}
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
                        <span>Your Drones</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Full Map
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* My Drones */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Plane className="h-5 w-5 text-primary" />
                      <span>My Drones</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Drone
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockDrones.map((drone) => (
                    <motion.div 
                      key={drone.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                    >
                      <div className="flex items-center space-x-3">
                        <DroneIcon size="sm" animate={drone.status === "flying"} />
                        <div>
                          <h4 className="font-medium">{drone.name}</h4>
                          <p className="text-sm text-muted-foreground">{drone.model}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <Battery className="h-4 w-4" />
                          <span className="text-sm font-medium">{drone.batteryLevel}%</span>
                        </div>
                        <Progress value={drone.batteryLevel} className="w-20 h-2" />
                        <Badge 
                          variant={drone.status === "flying" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {drone.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Missions */}
            <Card className="border-border/50 bg-card-gradient mt-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="h-5 w-5 text-primary" />
                  <span>Recent Missions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMissions.map((mission) => (
                    <div 
                      key={mission.id}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                    >
                      <div>
                        <h4 className="font-medium">Mission #{mission.id.split('-')[1]}</h4>
                        <p className="text-sm text-muted-foreground">
                          {mission.distance}km • {mission.batteryUsed}% battery used
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            mission.status === "completed" ? "default" : 
                            mission.status === "active" ? "secondary" : "outline"
                          }
                        >
                          {mission.status}
                        </Badge>
                        {mission.cost && (
                          <p className="text-sm text-muted-foreground mt-1">
                            ${mission.cost}
                          </p>
                        )}
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