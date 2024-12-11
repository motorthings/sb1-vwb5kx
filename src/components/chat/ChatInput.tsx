import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-primary/20 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-dark border border-primary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}