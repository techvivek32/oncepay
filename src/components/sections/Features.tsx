import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Bot, 
  DollarSign, 
  Code, 
  Shield, 
  Headphones,
  ArrowRight 
} from 'lucide-react';
import whatsappFeature from '@/assets/whatsapp-feature.jpg';
import splitSettlements from '@/assets/split-settlements.jpg';
import websiteIntegration from '@/assets/website-integration.jpg';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Enable customers to make payments directly through WhatsApp chats with seamless transaction flows.',
    href: '/services/whatsapp-integration',
    image: null,
    highlight: 'Most Popular'
  },

  {
    icon: DollarSign,
    title: 'Split Settlements',
    description: 'Automatically distribute payments to multiple accounts with customizable rules and real-time tracking.',
    href: '/services/split-settlements',
    image: null,
    highlight: null
  },
  {
    icon: Code,
    title: 'API Integration',
    description: 'Developer-friendly REST APIs and webhooks for seamless integration with your existing systems and workflows.',
    href: '/services/api-integration',
    image: null,
    highlight: 'Developer Friendly'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Bank-grade security with end-to-end encryption and compliance with global financial standards.',
    href: '/services',
    image: null,
    highlight: null
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and customer service to ensure smooth operations.',
    href: '/contact',
    image: null,
    highlight: null
  },
  {
    icon: Bot,
    title: 'WhatsApp AI',
    description: 'Intelligent AI-powered WhatsApp assistant for automated customer support, order processing, and payment assistance.',
    href: '/services/whatsapp-ai',
    image: null,
    highlight: 'AI Powered'
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="group hover-lift border-blue-200 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
              {feature.highlight && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  {feature.highlight}
                </div>
              )}
              
              {feature.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="accent" size="xl" asChild>
            <Link to="/services">
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}