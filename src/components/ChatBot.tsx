import React, { useState } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m Omix Assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: 'Thanks for your message! This is a demo chatbot. Our AI can help with questions about Omix features, pricing, and implementation.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 neon-glow z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-80 ${isMinimized ? 'h-14' : 'h-96'} glassmorphism-strong rounded-2xl border border-white/20 flex flex-col overflow-hidden z-50 transition-all duration-300`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-semibold text-white text-sm">Omix Assistant</div>
            <div className="text-green-400 text-xs flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
          >
            <Minimize2 className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'glassmorphism border border-white/10 text-gray-100'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;