import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { name: 'WhatsApp Integration', href: '/services/whatsapp-integration' },
      { name: 'WhatsApp Chatbot', href: '/services/whatsapp-chatbot' },
      { name: 'Split Settlements', href: '/services/split-settlements' },
      { name: 'Website Integration', href: '/services/website-integration' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' },
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Code of Conduct', href: '/code-of-conduct' },
    ]
  }
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const offices = [
  {
    city: 'New York',
    address: '123 Business Ave, Suite 100\nNew York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'ny@oncepay.com'
  },
  {
    city: 'London',
    address: '456 Finance Street\nLondon, EC2A 1AA, UK',
    phone: '+44 20 1234 5678',
    email: 'london@oncepay.com'
  },
  {
    city: 'Singapore',
    address: '789 Fintech Hub\nSingapore 018989',
    phone: '+65 6123 4567',
    email: 'sg@oncepay.com'
  }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold">OncePay</span>
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md text-sm sm:text-base">
                Revolutionizing payments with WhatsApp integration, split settlements, 
                and seamless API solutions for modern businesses.
              </p>
              <div className="flex space-x-4 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-primary-light py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 OncePay. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/code-of-conduct" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}