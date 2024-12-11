import React from 'react';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
}

export function ChatMessage({ content, isBot }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
        isBot 
          ? 'bg-dark border border-primary/20 text-white' 
          : 'bg-primary text-white'
      }`}>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}