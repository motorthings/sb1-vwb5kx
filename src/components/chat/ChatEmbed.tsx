import React, { useState, useEffect } from 'react';

export function ChatEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset error state when component mounts
    setError(null);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Unable to load chat. Please try again later.');
  };

  return (
    <div className="relative w-full h-[600px] bg-dark rounded-lg shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark">
          <div className="text-accent">Loading chat...</div>
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-dark">
          <div className="text-red-500">{error}</div>
        </div>
      ) : (
        <iframe 
          src="https://app.cassidyai.com/embed/chat/v2/cm3yu9s3m0gtfaf3vjael0tq8" 
          className="w-full h-full border-none rounded-lg"
          title="Waifinder Chat Assistant"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="camera *; microphone *; fullscreen *; speaker *"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals"
        />
      )}
    </div>
  );
}