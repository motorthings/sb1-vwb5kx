import React from 'react';

export function ChatPage() {
  return (
    <div className="min-h-screen bg-darker flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <iframe 
          src="https://app.cassidyai.com/embed/chat/v2/cm3yu9s3m0gtfaf3vjael0tq8" 
          className="w-full h-[600px] border-none rounded-lg shadow-lg"
          title="Waifinder Chat Assistant"
        />
      </div>
    </div>
  );
}