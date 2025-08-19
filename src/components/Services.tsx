import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, Rocket, Shield, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Strategic Consulting",
    description: "Transform your business with expert strategic guidance and actionable insights.",
    icon: Target,
    features: ["Market Analysis", "Growth Strategy", "Competitive Intelligence"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions.",
    icon: Zap,
    features: ["Process Automation", "Cloud Migration", "Digital Workflows"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Team Development",
    description: "Build high-performing teams that drive sustainable growth.",
    icon: Users,
    features: ["Leadership Training", "Skills Development", "Performance Coaching"],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Innovation Labs",
    description: "Foster innovation culture and develop breakthrough solutions.",
    icon: Lightbulb,
    features: ["Idea Generation", "Prototype Development", "Innovation Strategy"],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Scale & Growth",
    description: "Accelerate your growth with proven scaling methodologies.",
    icon: Rocket,
    features: ["Growth Hacking", "Market Expansion", "Revenue Optimization"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Risk Management",
    description: "Protect your business with comprehensive risk assessment.",
    icon: Shield,
    features: ["Risk Assessment", "Compliance", "Security Audits"],
    color: "from-indigo-500 to-purple-600"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full spectrum of services designed to elevate your business 
            and drive sustainable growth in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-glow transition-smooth border-border/50 gradient-card hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;