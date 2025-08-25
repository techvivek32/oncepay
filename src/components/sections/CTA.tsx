import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses already using OncePay to streamline their payment processes. 
            Get started today with a free demo and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5 Min</div>
              <div className="text-gray-600">Quick Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-gray-600">Demo Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}