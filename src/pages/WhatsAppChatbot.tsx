import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  MessageCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhatsAppChatbot = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Responses',
      description: 'Intelligent chatbot that understands customer queries and provides accurate responses'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support without human intervention'
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in their preferred language'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Track conversations, response times, and customer satisfaction'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'End-to-end encrypted payment processing through WhatsApp'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Deploy your chatbot in minutes with our easy integration'
    }
  ];

  const useCases = [
    'Customer Support & FAQ',
    'Order Status & Tracking',
    'Payment Processing',
    'Appointment Booking',
    'Product Catalog Browsing',
    'Lead Generation',
    'Feedback Collection',
    'Account Management'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: [
        'Up to 1,000 messages/month',
        'Basic AI responses',
        'WhatsApp Business API',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '₹2,999',
      period: '/month',
      features: [
        'Up to 10,000 messages/month',
        'Advanced AI with custom training',
        'Multi-language support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited messages',
        'Dedicated AI model',
        'White-label solution',
        '24/7 phone support',
        'Custom dashboard',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">AI Powered</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              WhatsApp AI Chatbot
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your customer service with intelligent WhatsApp chatbots. 
              Automate responses, process payments, and engage customers 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to automate customer interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Versatile chatbot solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-green-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Customer Service?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses using our WhatsApp chatbot to improve customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatsAppChatbot;