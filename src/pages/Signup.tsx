import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/ui/navigation";
import { DroneIcon } from "@/components/ui/drone-icon";
import { useToast } from "@/hooks/use-toast";
import { Users, Building, Mail, Lock, User, Phone } from "lucide-react";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const role = searchParams.get("role") || "pilot";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    // Mock signup process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store mock user data
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      role: role,
      status: "active"
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    toast({
      title: "Account Created!",
      description: `Welcome to DroneNet! Redirecting to your ${role} dashboard...`,
    });

    // Redirect to appropriate dashboard
    setTimeout(() => {
      if (role === "pilot") {
        navigate("/dashboard/pilot");
      } else if (role === "station-owner") {
        navigate("/dashboard/station-owner");
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <DroneIcon size="lg" animate className="mx-auto mb-4 text-primary" />
              <h1 className="text-3xl font-bold mb-2">Join DroneNet</h1>
              <p className="text-muted-foreground">
                Create your account and start charging today
              </p>
            </div>

            <Card className="border-border/50 bg-card-gradient">
              <CardHeader className="pb-4">
                <Tabs value={role} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="pilot" asChild>
                      <Link to="/signup?role=pilot" className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Pilot</span>
                      </Link>
                    </TabsTrigger>
                    <TabsTrigger value="station-owner" asChild>
                      <Link to="/signup?role=station-owner" className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>Station Owner</span>
                      </Link>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {role === "station-owner" && (
                    <div>
                      <label htmlFor="company" className="text-sm font-medium mb-2 block">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Your Company LLC"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="password" className="text-sm font-medium mb-2 block">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="text-sm font-medium mb-2 block">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full glow-primary">
                    Create {role === "pilot" ? "Pilot" : "Station Owner"} Account
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}