import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "OncePay transformed our customer payment experience. WhatsApp integration increased our conversion rate by 40% and reduced support tickets significantly.",
    author: "Priya Sharma",
    role: "CEO",
    company: "TechFlow Solutions",
    rating: 5,
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/74.jpg"
  },
  {
    content: "The split settlement feature is a game-changer for our marketplace. Automatic distribution to vendors saves us hours of manual work every day.",
    author: "Arjun Patel", 
    role: "CFO",
    company: "MarketPlace Pro",
    rating: 5,
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/71.jpg"
  },
  {
    content: "Implementation was seamless and the API documentation is excellent. Our development team had everything up and running in just two days.",
    author: "Kavya Reddy",
    role: "CTO", 
    company: "StartupHub",
    rating: 5,
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/43.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers say about their experience with OncePay. 
            Join thousands of satisfied businesses already using our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-card border-2 border-blue-200 relative shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-16 pt-16 border-t border-card-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Trusted by companies worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-lg font-semibold">TechCorp</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">FinanceFlow</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">RetailPlus</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">StartupLab</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}