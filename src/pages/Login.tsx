import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { DroneIcon } from "@/components/ui/drone-icon";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, Shield } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check for admin credentials
    if (formData.email === "admin@dronenet.com" && formData.password === "Admin@123") {
      const adminData = {
        id: "admin-1",
        name: "System Administrator",
        email: "admin@dronenet.com",
        role: "admin",
        status: "active"
      };
      
      localStorage.setItem("user", JSON.stringify(adminData));
      
      toast({
        title: "Welcome Admin!",
        description: "Redirecting to admin dashboard...",
      });

      setTimeout(() => {
        navigate("/dashboard/admin");
      }, 1500);
      return;
    }
    
    // Mock user login (for demo purposes)
    const userData = {
      id: "user-demo",
      name: "Demo User",
      email: formData.email,
      role: "pilot", // Default to pilot for demo
      status: "active"
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    toast({
      title: "Welcome back!",
      description: "Redirecting to your dashboard...",
    });

    setTimeout(() => {
      navigate("/dashboard/pilot");
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
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your DroneNet account
              </p>
            </div>

            <Card className="border-border/50 bg-card-gradient">
              <CardHeader>
                <CardTitle className="text-center">Sign In</CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="text-sm font-medium mb-2 block">
                      Password
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

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full glow-primary">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-muted-foreground">
                        Or
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 border border-border/50 rounded-lg bg-background/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Admin Access</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Use these credentials for admin dashboard:
                    </p>
                    <p className="text-xs font-mono bg-background/80 p-2 rounded border">
                      admin@dronenet.com / Admin@123
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
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