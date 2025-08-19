import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$2,999",
    period: "/month",
    description: "Perfect for small businesses ready to scale",
    icon: Zap,
    features: [
      "Strategic Business Analysis",
      "Monthly Consultation Sessions",
      "Basic Digital Tools Setup",
      "Performance Tracking",
      "Email Support",
      "Resource Library Access"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$5,999",
    period: "/month",
    description: "Comprehensive solutions for growing companies",
    icon: Star,
    features: [
      "Everything in Starter",
      "Advanced Analytics Dashboard",
      "Weekly Strategy Sessions",
      "Team Training Workshops",
      "Custom Process Automation",
      "Priority Phone Support",
      "Quarterly Business Reviews",
      "Market Research Reports"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Solution Development",
      "24/7 Premium Support",
      "On-site Consultation",
      "Executive Leadership Training",
      "Enterprise-grade Security",
      "Unlimited Team Access",
      "Global Implementation Support"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  }
];

const Packages = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Pricing Packages
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible packages designed to meet your business needs and drive 
            sustainable growth at every stage of your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative group hover:shadow-glow transition-smooth border-border/50 ${
                pkg.popular 
                  ? 'ring-2 ring-primary shadow-glow scale-105 lg:scale-110' 
                  : 'hover:scale-105'
              } gradient-card overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pkg.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {pkg.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">{pkg.period}</span>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button 
                  variant={pkg.popular ? "hero" : "default"} 
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-smooth"
                >
                  {pkg.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>

              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All packages include a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              No setup fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;