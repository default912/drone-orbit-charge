import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Users, Building } from "lucide-react";

const pricingTiers = [
  {
    name: "Pilot",
    icon: Zap,
    price: "Pay as you go",
    description: "Perfect for individual drone operators",
    features: [
      "Access to all charging stations",
      "Real-time station availability",
      "Mobile app with route planning",
      "24/7 customer support",
      "Basic flight analytics",
      "Wallet system with auto-top-up"
    ],
    pricing: "$0.12-0.18 per kWh",
    popular: false
  },
  {
    name: "Fleet Pro",
    icon: Users,
    price: "$99/month",
    description: "For commercial operators with multiple drones",
    features: [
      "Everything in Pilot plan",
      "Priority station access",
      "Fleet management dashboard",
      "Bulk charging discounts (10% off)",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "Custom billing & invoicing",
      "API access for integrations"
    ],
    pricing: "Up to 20 drones",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    description: "Large-scale operations with custom needs",
    features: [
      "Everything in Fleet Pro",
      "Unlimited drones",
      "Private charging stations",
      "Custom pricing agreements",
      "White-label solutions",
      "SLA guarantees",
      "On-site training & support",
      "Custom integrations"
    ],
    pricing: "Contact sales",
    popular: false
  }
];

const stationOwnerTiers = [
  {
    name: "Basic Station",
    revenue: "70% revenue share",
    investment: "$5,000 - $15,000",
    features: [
      "2-4 charging slots",
      "Standard installation",
      "Basic monitoring",
      "Mobile app management",
      "Monthly payouts"
    ]
  },
  {
    name: "Premium Station",
    revenue: "75% revenue share",
    investment: "$15,000 - $35,000",
    features: [
      "6-12 charging slots",
      "Fast charging capability",
      "Advanced monitoring",
      "Real-time analytics",
      "Weekly payouts",
      "Priority support"
    ]
  },
  {
    name: "Hub Station",
    revenue: "80% revenue share",
    investment: "$35,000+",
    features: [
      "12+ charging slots",
      "Ultra-fast charging",
      "Full automation",
      "Enterprise analytics",
      "Daily payouts",
      "Dedicated support"
    ]
  }
];

export default function Pricing() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Whether you're a solo pilot 
              or managing a fleet of hundreds, we have you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilot Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Pilots</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get access to our growing network of charging stations worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <Card className={`border-border/50 bg-card-gradient h-full ${
                  tier.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}>
                  <CardHeader className="text-center pb-8">
                    <div className="p-3 w-fit mx-auto rounded-lg bg-primary/10 mb-4">
                      <tier.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {tier.price}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.pricing}</p>
                    <p className="text-muted-foreground mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${tier.popular ? 'glow-primary' : ''}`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Owner Pricing */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Station Owners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our network and start earning revenue from drone charging
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {stationOwnerTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card-gradient h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="text-2xl font-bold text-accent mt-2">
                      {tier.revenue}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.investment}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Charging Costs Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing based on energy consumption and location
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Pricing Factors</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Energy Consumption</h4>
                    <p className="text-muted-foreground">
                      Pay only for the kWh used to charge your drone battery
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location Premium</h4>
                    <p className="text-muted-foreground">
                      High-demand areas like city centers may have higher rates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time of Day</h4>
                    <p className="text-muted-foreground">
                      Peak hours may have surge pricing during high demand
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Charging Speed</h4>
                    <p className="text-muted-foreground">
                      Fast charging may include a small premium for convenience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-border/50 bg-card-gradient">
                <CardHeader>
                  <CardTitle>Example Charging Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>DJI Mavic 3 (77Wh battery)</span>
                      <span className="font-mono">0.077 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manhattan Station Rate</span>
                      <span className="font-mono">$0.18/kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fast Charging Premium</span>
                      <span className="font-mono">$0.50</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Cost</span>
                      <span className="text-primary">$0.51</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * Prices shown are examples and may vary by location
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing structure
            </p>
          </motion.div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a signup fee?</h3>
                <p className="text-muted-foreground">
                  No, creating an account is completely free. You only pay for charging sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do refunds work?</h3>
                <p className="text-muted-foreground">
                  If a charging session fails, you're automatically refunded. For other issues, contact support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I get volume discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, Fleet Pro subscribers get 10% off all charging sessions, and Enterprise customers can negotiate custom rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of pilots already using DroneNet
            </p>
            <Button size="lg" className="glow-primary">
              Start Charging Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}