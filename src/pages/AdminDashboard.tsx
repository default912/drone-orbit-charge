import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { mockUsers, mockChargingStations, mockDrones } from "@/lib/mock-data";
import { 
  Shield, 
  Users, 
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertTriangle,
  LogOut,
  Home,
  Settings,
  BarChart3,
  MapPin,
  UserCheck,
  Zap
} from "lucide-react";

const sidebarItems = [
  { title: "Overview", url: "/dashboard/admin", icon: Home },
  { title: "User Approvals", url: "/dashboard/admin/approvals", icon: UserCheck },
  { title: "Station Approvals", url: "/dashboard/admin/stations", icon: Zap },
  { title: "System Metrics", url: "/dashboard/admin/metrics", icon: BarChart3 },
  { title: "Disputes", url: "/dashboard/admin/disputes", icon: AlertTriangle },
  { title: "Heatmap", url: "/dashboard/admin/heatmap", icon: MapPin },
  { title: "Settings", url: "/dashboard/admin/settings", icon: Settings },
];

function AdminSidebar() {
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
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Admin Panel</h2>
              <p className="text-xs text-sidebar-foreground/60">System Administrator</p>
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

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [pendingUsers] = useState(mockUsers.filter(u => u.status === "pending"));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const approveUser = (userId: string) => {
    console.log(`Approved user: ${userId}`);
  };

  const rejectUser = (userId: string) => {
    console.log(`Rejected user: ${userId}`);
  };

  // Generate heatmap data points
  const heatmapPoints = [
    { lat: 40.7831, lng: -73.9712, intensity: 0.8 },
    { lat: 40.7589, lng: -73.9851, intensity: 0.9 },
    { lat: 40.7505, lng: -73.9934, intensity: 0.6 },
    { lat: 40.7061, lng: -73.9969, intensity: 0.7 },
    { lat: 40.7282, lng: -73.7948, intensity: 0.5 },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Admin Control Tower 🛡️</h1>
                <p className="text-muted-foreground">
                  Monitor system health and manage platform operations
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>

            {/* System Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold">10,247</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Stations</p>
                      <p className="text-2xl font-bold">523</p>
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
                      <p className="text-sm text-muted-foreground">Daily Missions</p>
                      <p className="text-2xl font-bold">1,834</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Issues</p>
                      <p className="text-2xl font-bold">7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Demand Heatmap */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Demand Heatmap</span>
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
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>High Demand</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Low</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Approvals */}
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <UserCheck className="h-5 w-5 text-primary" />
                      <span>Pending Approvals</span>
                    </div>
                    <Badge variant="secondary">{pendingUsers.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingUsers.map((user) => (
                    <motion.div 
                      key={user.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-background/50"
                    >
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user.email} • {user.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Applied: {new Date(user.joinDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          onClick={() => approveUser(user.id)}
                          className="glow-primary"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => rejectUser(user.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* System Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Revenue Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Today</span>
                      <span className="font-medium">$12,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">This Week</span>
                      <span className="font-medium">$84,293</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">This Month</span>
                      <span className="font-medium">$342,184</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Revenue</span>
                      <span className="text-primary">$2.4M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Uptime</span>
                      <Badge variant="default">99.9%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Station Network</span>
                      <Badge variant="default">98.7%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Payment System</span>
                      <Badge variant="default">100%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mobile App</span>
                      <Badge variant="secondary">99.2%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-2 border-primary pl-3">
                      <p className="font-medium">New station approved</p>
                      <p className="text-muted-foreground">Brooklyn Heights Hub - 2 min ago</p>
                    </div>
                    <div className="border-l-2 border-accent pl-3">
                      <p className="font-medium">User dispute resolved</p>
                      <p className="text-muted-foreground">Charging session #1234 - 15 min ago</p>
                    </div>
                    <div className="border-l-2 border-primary pl-3">
                      <p className="font-medium">System maintenance</p>
                      <p className="text-muted-foreground">API server update - 1 hour ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}