import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "How secure are payments processed through Oncepay?",
    answer: "Oncepay uses bank-grade security with end-to-end encryption, PCI DSS compliance, and ISO 27001 certification. All transactions are processed through secure channels with real-time fraud detection."
  },
  {
    question: "Can I integrate Oncepay with my existing website?",
    answer: "Yes! Oncepay offers comprehensive APIs and SDKs for easy integration with your existing systems. Our developer-friendly documentation and support team ensure smooth implementation."
  },
  {
    question: "How does WhatsApp payment integration work?",
    answer: "Customers can initiate payments directly through WhatsApp chats using payment links, QR codes, or our chatbot. The entire transaction happens within the WhatsApp interface for maximum convenience."
  },
  {
    question: "What are split settlements and how do they work?",
    answer: "Split settlements automatically distribute incoming payments to multiple accounts based on your predefined rules. You can set percentage-based or fixed-amount distributions with real-time tracking and reconciliation."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about Oncepay features and implementation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? Check out our comprehensive FAQ section or contact our support team.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}