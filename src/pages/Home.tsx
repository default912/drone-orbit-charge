import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { DroneIcon } from "@/components/ui/drone-icon";
import { Zap, MapPin, Shield, Clock, Battery, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Smart Station Network",
    description: "AI-powered routing to the nearest available charging station"
  },
  {
    icon: Battery,
    title: "Fast Charging",
    description: "Get back in the air with rapid charging technology"
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Enterprise-grade security for your valuable drones"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock charging network for mission-critical operations"
  }
];

const stats = [
  { value: "500+", label: "Charging Stations" },
  { value: "10k+", label: "Active Pilots" },
  { value: "99.9%", label: "Uptime" },
  { value: "50M+", label: "Flights Powered" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <DroneIcon size="xl" animate className="mx-auto mb-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Keep Your Drone
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  In the Air
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The world's largest network of intelligent drone charging stations. 
                Power your missions with automated routing, fast charging, and seamless payments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-primary" asChild>
                  <Link to="/signup/pilot">
                    <Users className="mr-2 h-5 w-5" />
                    Signup as Pilot
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/signup/station-owner">
                    <Zap className="mr-2 h-5 w-5" />
                    Become Station Owner
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose DroneNet?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets seamless user experience for the next generation of drone operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card-gradient hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Power Your Fleet?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of pilots and station owners building the future of drone operations.
            </p>
            <Button size="lg" className="glow-primary" asChild>
              <Link to="/signup">
                Get Started Today
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">DroneNet</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Powering the future of autonomous flight with intelligent charging infrastructure.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
                <Link to="/pricing" className="block hover:text-primary transition-colors">Pricing</Link>
                <Link to="/faq" className="block hover:text-primary transition-colors">FAQ</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
                <a href="#" className="block hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="block hover:text-primary transition-colors">Status</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 DroneNet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}