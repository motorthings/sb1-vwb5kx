import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Solutions } from './components/home/Solutions';
import { Footer } from './components/layout/Footer';
import { ChatPage } from './pages/ChatPage';

function App() {
  // Simple check for the chat page route
  const isChat = window.location.pathname === '/chat';

  if (isChat) {
    return <ChatPage />;
  }

  return (
    <div className="min-h-screen bg-darker">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}

export default App;