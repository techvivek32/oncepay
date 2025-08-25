import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Bot, 
  DollarSign, 
  Code, 
  ArrowRight,
  Check
} from 'lucide-react';


const services = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Enable seamless payments directly through WhatsApp chats with real-time confirmations and receipt delivery.',
    features: ['Direct chat payments', 'QR code generation', 'Real-time confirmations', 'Receipt delivery'],
    href: '/services/whatsapp-integration',

    popular: true
  },
  {
    icon: Bot,
    title: 'WhatsApp Chatbot',
    description: 'AI-powered customer support and billing assistance available 24/7 through WhatsApp automation.',
    features: ['24/7 AI support', 'Billing assistance', 'Order tracking', 'Customer queries'],
    href: '/services/whatsapp-chatbot',

    popular: false
  },
  {
    icon: DollarSign,
    title: 'Split Settlements',
    description: 'Automatically distribute payments to multiple accounts with customizable rules and real-time tracking.',
    features: ['Automatic distribution', 'Custom rules', 'Real-time tracking', 'Reconciliation tools'],
    href: '/services/split-settlements',

    popular: false
  },
  {
    icon: Code,
    title: 'Website Integration',
    description: 'Developer-friendly APIs and SDKs for seamless integration with your existing systems and workflows.',
    features: ['RESTful APIs', 'Multiple SDKs', 'Webhook support', 'Sandbox testing'],
    href: '/services/website-integration',

    popular: false
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Payment Solutions That Work
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Comprehensive payment ecosystem designed for modern businesses. 
              Choose the solutions that fit your needs and scale as you grow.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover-lift bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 relative h-full">
                {service.popular && (
                  <div className="absolute top-6 right-6 bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full z-10">
                    Popular
                  </div>
                )}
                
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-foreground mb-6 text-center">Key Features</h4>
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>


                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can create tailored payment solutions that perfectly fit your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}