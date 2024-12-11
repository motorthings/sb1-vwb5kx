import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface Message {
  content: string;
  isBot: boolean;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! How can I assist you today?", isBot: true }
  ]);

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { content: message, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "I'm a demo bot. This is a placeholder response.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-darker rounded-lg shadow-lg">
      <div className="p-4 border-b border-primary/20">
        <h2 className="text-xl font-semibold text-white">Waifinder Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            content={message.content}
            isBot={message.isBot}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}