import React, { useEffect, useRef, useState } from 'react';


interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
  chatHistory: ChatMessageWithMeta[];
  setChatHistory: (messages: ChatMessageWithMeta[]) => void;
}

interface ChatMessageWithMeta extends ChatMessage {
  id: number;
  timestamp: string;
}

const Chat: React.FC<ChatProps> = ({ isOpen, onClose, chatHistory, setChatHistory }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      const welcomeMessage: ChatMessageWithMeta = {
        id: 0,
        role: 'bot',
        text:
          'Hi there! 👋 Welcome to Anjana guest.\n\n' +
          'How can I assist you today?\n\n' +
          '1. 🛏️ Check room availability\n' +
          '2. 🛎️ Explore hotel services\n' +
          '3. 📞 Contact the front desk\n\n' +
          '👉 Please enter the number to continue...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistory([welcomeMessage]);
    }

    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

 

  

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-20 right-2 sm:right-4 w-[calc(100vw-1rem)] sm:w-80 md:w-96 h-[calc(100vh-2rem)] sm:h-96 md:h-[500px] max-w-[480px] max-h-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 z-40 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-500 text-white rounded-t-xl">
        <div className="flex items-center min-w-0 flex-1">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div className="min-w-0">
            <div className="font-bold text-base truncate">Joanne</div>
            <div className="text-xs opacity-80 truncate">Consultant</div>
          </div>
        </div>
        <button onClick={onClose} className="bg-transparent border-none text-white cursor-pointer p-1 hover:bg-blue-600 rounded transition-colors flex-shrink-0">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 scroll-smooth">
        {chatHistory.map((message) => (
          <div key={message.id} className='flex items-start mb-4'>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 `}>
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className={`max-w-[85%] sm:max-w-[75%] p-2 rounded-xl text-sm leading-relaxed shadow-sm break-words whitespace-pre-line 
            }`}>
           
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
           
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full outline-none text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors min-w-0"
          />
          <button
           
            className="p-2 bg-blue-500 text-white border-none rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-600 transition-colors flex-shrink-0"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
