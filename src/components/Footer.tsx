import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Stay Connected
          </Badge>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Get Weekly Business Insights
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 10,000+ business leaders receiving our exclusive insights, 
            strategies, and industry trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="flex-1 h-12 bg-background border-border/50"
            />
            <Button variant="hero" size="lg" className="group">
              Subscribe
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 border-t border-border/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-4 text-foreground">BusinessPro</h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through innovative solutions, strategic guidance, 
              and exceptional service delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {['Strategic Consulting', 'Digital Transformation', 'Team Development', 'Innovation Labs', 'Scale & Growth', 'Risk Management'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Case Studies', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@businesspro.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Business Center<br />
                  Suite 400<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 border-t border-border/30">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 BusinessPro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;