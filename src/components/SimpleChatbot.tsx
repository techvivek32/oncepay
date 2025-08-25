import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SimpleChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const responses = {
    'hi': 'Hello! How can I assist you today?',
    'hello': 'Hi there! What can I help you with?',
    'help': 'I can help you with payments, pricing, and support.',
    'pricing': 'Our plans start at ₹999/month. Contact us for details!',
    'contact': 'You can reach us at support@oncepay.com',
    'default': 'Thanks for your message! Contact support@oncepay.com for more help.'
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    const response = responses[input.toLowerCase()] || responses.default;
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
    
    setInput('');
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white border rounded-lg shadow-xl z-50 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-2 rounded text-sm ${
                  msg.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded text-sm"
            />
            <Button onClick={sendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}