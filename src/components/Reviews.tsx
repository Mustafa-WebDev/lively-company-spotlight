import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Chen",
    position: "CEO, TechFlow",
    company: "TechFlow Solutions",
    rating: 5,
    review: "Exceptional service that transformed our business operations. The team's expertise and dedication exceeded all expectations. ROI was visible within the first quarter.",
    avatar: "SC",
    image: "/api/placeholder/64/64"
  },
  {
    name: "Michael Rodriguez",
    position: "Director, InnovaCorp",
    company: "InnovaCorp Industries",
    rating: 5,
    review: "Outstanding strategic guidance that helped us navigate complex market challenges. Their innovative approach and deep industry knowledge made all the difference.",
    avatar: "MR",
    image: "/api/placeholder/64/64"
  },
  {
    name: "Emily Thompson",
    position: "Founder, GrowthLab",
    company: "GrowthLab Ventures",
    rating: 5,
    review: "Professional, reliable, and results-driven. They delivered beyond our expectations and provided continuous support throughout our transformation journey.",
    avatar: "ET",
    image: "/api/placeholder/64/64"
  },
  {
    name: "David Park",
    position: "VP Operations, ScaleUp",
    company: "ScaleUp Dynamics",
    rating: 5,
    review: "The best investment we've made for our company. Their team brought fresh perspectives and practical solutions that drove immediate improvements.",
    avatar: "DP",
    image: "/api/placeholder/64/64"
  },
  {
    name: "Lisa Wang",
    position: "CMO, NextGen",
    company: "NextGen Marketing",
    rating: 5,
    review: "Incredible attention to detail and commitment to excellence. They understood our vision and helped us achieve goals we thought were impossible.",
    avatar: "LW",
    image: "/api/placeholder/64/64"
  },
  {
    name: "James Miller",
    position: "President, FutureTech",
    company: "FutureTech Solutions",
    rating: 5,
    review: "Game-changing partnership that revolutionized our approach to business. Their expertise in digital transformation is unmatched in the industry.",
    avatar: "JM",
    image: "/api/placeholder/64/64"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Client Reviews
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying 
            about their transformation journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.name}
              className="group hover:shadow-glow transition-smooth border-border/50 gradient-card hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                    <p className="text-xs text-primary font-medium">{review.company}</p>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "150+", label: "Enterprise Clients" },
            { number: "5 Years", label: "Average Partnership" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;