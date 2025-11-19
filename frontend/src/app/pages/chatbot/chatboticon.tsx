import React, { useState } from 'react';

const Chatboticon = ({ onToggleChat, isChatOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChatbotClick = () => {
    // Call the parent function to toggle chat
    if (onToggleChat) {
      onToggleChat();
    }
    console.log('Chatbot clicked!');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50
      }}
    >
      <button
        onClick={handleChatbotClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        style={{
          backgroundColor: isHovered ? '#2563eb' : '#3b82f6',
          color: 'white',
          borderRadius: '50%',
          padding: '16px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
      >
        {isChatOpen ? (
          // Close icon when chat is open
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          // Chat Icon SVG when chat is closed
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      
      {/* Optional tooltip */}
      {isHovered && !isChatOpen && (
        <div
          className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap"
          style={{
            position: 'absolute',
            bottom: '100%',
            right: '0',
            marginBottom: '8px',
            padding: '4px 12px',
            backgroundColor: '#1f2937',
            color: 'white',
            fontSize: '14px',
            borderRadius: '4px',
            whiteSpace: 'nowrap'
          }}
        >
          Need help? Chat with us!
        </div>
      )}
    </div>
  );
};

export default Chatboticon;