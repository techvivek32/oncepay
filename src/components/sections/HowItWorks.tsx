import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Customer Initiates Payment',
    description: 'Customer sends a payment request or clicks a payment link through WhatsApp chat.',
    details: ['WhatsApp chat integration', 'Payment link generation', 'QR code support']
  },
  {
    step: '02',
    icon: CreditCard,
    title: 'Secure Processing',
    description: 'Payment is processed securely through our encrypted gateway with real-time validation.',
    details: ['Bank-grade encryption', 'Real-time validation', 'Multiple payment methods']
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Instant Confirmation',
    description: 'Both parties receive instant confirmation and settlements are distributed automatically.',
    details: ['Instant notifications', 'Automatic settlements', 'Transaction receipts']
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, secure, and seamless payment processing in just three steps. 
            Get started with PayLocalX and transform your payment experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">

              
              <Card className="relative hover-lift bg-card-gradient border-card-border">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center font-bold text-lg shadow-accent">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">&lt;3s</div>
            <div className="text-gray-600 font-medium">Processing Time</div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Active Merchants</div>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </Card>
        </div>
      </div>
    </section>
  );
}