import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqData } from "@/lib/mock-data";
import { HelpCircle, Battery, DollarSign, Shield, Clock, Users } from "lucide-react";

const categories = [
  {
    icon: Battery,
    title: "Charging",
    description: "How our charging network works"
  },
  {
    icon: DollarSign,
    title: "Payments",
    description: "Pricing and billing information"
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Security and safety protocols"
  },
  {
    icon: Clock,
    title: "Operations",
    description: "Platform usage and features"
  },
  {
    icon: Users,
    title: "Accounts",
    description: "User management and support"
  }
];

export default function FAQ() {
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
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about DroneNet's charging platform, 
              pricing, and safety protocols.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Quick access to the topics you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="p-2 w-fit mx-auto rounded-lg bg-primary/10 mb-3">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50 bg-card-gradient">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-6 py-2 bg-background/50"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our support team is available 24/7 to help with any questions not covered here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@dronenet.com"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background hover:bg-card transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Popular Resources</h2>
            <p className="text-muted-foreground">
              Additional resources to help you get the most out of DroneNet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="font-semibold mb-2">User Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete walkthrough of platform features
                </p>
                <a href="#" className="text-primary hover:underline">Read Guide</a>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold mb-2">API Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Technical documentation for developers
                </p>
                <a href="#" className="text-primary hover:underline">View Docs</a>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📹</div>
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step video guides
                </p>
                <a href="#" className="text-primary hover:underline">Watch Videos</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}