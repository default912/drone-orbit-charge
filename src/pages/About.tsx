import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { DroneIcon } from "@/components/ui/drone-icon";
import { Target, Zap, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Critical Reliability",
    description: "99.9% uptime ensures your operations never stop"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology for next-generation aviation"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Building worldwide infrastructure for autonomous flight"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Powered by pilots and station owners worldwide"
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Tesla engineer with 10+ years in autonomous systems"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-SpaceX propulsion engineer, drone technology expert"
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Head of Safety",
    bio: "FAA consultant with expertise in aviation safety standards"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <DroneIcon size="lg" animate className="mx-auto mb-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powering the Future of
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Autonomous Flight
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DroneNet is revolutionizing the drone industry by building the world's first 
              comprehensive charging infrastructure for commercial and recreational drones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe drones will transform industries from delivery and agriculture to 
                emergency response and entertainment. But today's battery limitations hold back 
                this potential.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                That's why we're building a global network of intelligent charging stations 
                that enable longer flights, reduce downtime, and unlock new possibilities 
                for drone operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Enable 24/7 drone operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Reduce operational costs by 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Support sustainable aviation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card-gradient rounded-lg p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2019</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">$50M</div>
                    <div className="text-sm text-muted-foreground">Series A</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card-gradient hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 w-fit mx-auto rounded-lg bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans from Tesla, SpaceX, and the FAA leading the charge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card-gradient">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Every charged drone enables new possibilities - from delivering medical supplies 
              to remote areas to monitoring climate change from above.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.5M</div>
                <div className="text-lg mb-2">CO₂ Tons Reduced</div>
                <div className="text-sm text-muted-foreground">
                  By enabling electric drone operations
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50k</div>
                <div className="text-lg mb-2">Emergency Deliveries</div>
                <div className="text-sm text-muted-foreground">
                  Critical supplies to remote locations
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-lg mb-2">Flight Hours Enabled</div>
                <div className="text-sm text-muted-foreground">
                  Extended operations across industries
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}