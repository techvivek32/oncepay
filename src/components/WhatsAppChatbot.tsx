import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your OncePay assistant. 🚀 I can help you with payment integration, pricing, demos, and more! What would you like to know?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Features',
    'Pricing Plans', 
    'Demo',
    'Getting Started',
    'Benefits',
    'Security',
    'How it works',
    'Contact Support'
  ];

  const botResponses: { [key: string]: string } = {
    'payment integration': 'I can help you integrate OncePay payment solutions. Would you like to know about our APIs, WhatsApp payments, or split settlements?',
    'whatsapp setup': 'Setting up WhatsApp payments is easy! You need: 1) WhatsApp Business Account 2) OncePay API key 3) Webhook configuration. Shall I guide you through it?',
    'api documentation': 'You can find our complete API documentation at docs.oncepay.com. It includes code examples, authentication, and testing guides.',
    'pricing plans': 'We offer flexible pricing: Starter (₹999/month), Business (₹2999/month), Enterprise (Custom). All plans include WhatsApp integration!',
    'contact support': 'You can reach our support team at support@oncepay.com or call +91-XXXXXXXXX. We\'re available 24/7!',
    'hello': 'Hello! Welcome to OncePay. I\'m here to help you with payments, integrations, and any questions you have.',
    'hi': 'Hi there! How can I assist you with OncePay services today?',
    'help': 'I can help you with: Payment integration, WhatsApp setup, API docs, pricing, and technical support. What interests you?',
    'features': 'OncePay offers: 🔹 WhatsApp Payments 🔹 Split Settlements 🔹 API Integration 🔹 Secure Transactions 🔹 24/7 Support 🔹 AI-Powered Assistant',
    'security': 'Security is our priority! We use bank-grade encryption, PCI DSS compliance, and multi-layer authentication to protect your transactions.',
    'demo': 'I\'d love to show you a demo! You can schedule one at demo.oncepay.com or I can walk you through our key features right here.',
    'benefits': 'Benefits of OncePay: ✅ 40% higher conversion rates ✅ Reduced support tickets ✅ Automated settlements ✅ Easy integration ✅ Real-time analytics',
    'how it works': 'OncePay works in 3 simple steps: 1️⃣ Integrate our API 2️⃣ Configure payment methods 3️⃣ Start accepting payments via WhatsApp, web, or mobile!',
    'getting started': 'Getting started is easy! 1) Sign up for free 2) Get your API keys 3) Follow our quick setup guide 4) Start accepting payments in minutes!',
    'thank you': 'You\'re welcome! Is there anything else I can help you with today?',
    'thanks': 'Happy to help! Feel free to ask if you have more questions about OncePay.',
    'bye': 'Goodbye! Thanks for chatting with me. Don\'t hesitate to reach out if you need any help with OncePay!',
    'good': 'Great to hear! If you\'re ready to get started or have more questions, I\'m here to help.',
    'yes': 'Awesome! What would you like to know more about?',
    'no': 'No problem! Is there something else I can help you with?',
    'cost': 'Our pricing is transparent: Starter plan at ₹999/month includes 1000 transactions. Business plan at ₹2999/month includes 10,000 transactions. Need more? Let\'s discuss custom pricing!',
    'integration time': 'Most businesses integrate OncePay in 1-2 days. Our developer-friendly APIs and detailed documentation make it super quick!',
    'support': 'We provide 24/7 technical support, dedicated account managers for business plans, and comprehensive documentation. You\'re never alone!'
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message: string): string => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    return 'Thanks for your message! For specific queries, please contact our support team at support@oncepay.com or try one of the quick options below.';
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };



  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg z-50 p-0"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold">OncePay Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-600 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="p-2 border-t">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs h-6"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              

            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default WhatsAppChatbot;