import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Users, Zap, Globe, Target, Heart, Award } from 'lucide-react';

const timeline = [
  { year: '2020', event: 'OncePay founded with vision to simplify payments' },
  { year: '2021', event: 'Launched WhatsApp integration for first 100 merchants' },
  { year: '2022', event: 'Introduced split settlements and reached 1,000+ customers' },
  { year: '2023', event: 'Expanded globally with offices in London and Singapore' },
  { year: '2024', event: 'Serving 10,000+ businesses across 25 countries' }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    bio: 'Former PayPal executive with 15 years in fintech innovation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Tech visionary who built payment systems for Fortune 500 companies.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Product strategist focused on user experience and merchant success.'
  },
  {
    name: 'David Kumar',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Engineering leader with expertise in scalable payment infrastructure.'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security and privacy of every transaction with bank-grade encryption and compliance standards.'
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Our customers\' success is our success. We provide 24/7 support and continuously improve based on feedback.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge payment solutions that solve real business challenges.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Building payment solutions that work seamlessly across borders and cultures for businesses worldwide.'
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      
       <section className="py-24 bg-gradient-hero text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Revolutionizing Payments for Modern Business
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
                    OncePay was founded with a simple mission: to make payments as easy as sending a message. 
              Today, we're transforming how businesses handle transactions across the globe.
                  </p>
                  
                </div>
              </div>
            </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              We believe that payment processing should be simple, secure, and accessible to businesses of all sizes. 
              Our mission is to eliminate the complexity and friction in digital payments by leveraging the platforms 
              people already use and trust.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Active Merchants</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">$100M+</div>
              <div className="text-gray-600 font-medium">Processed Volume</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global payment platform, here's how we've grown and evolved.
            </p>
          </div>
          
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-800 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in fintech, 
              engineering, and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build products and serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift bg-white border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your payment process or join our growing team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}