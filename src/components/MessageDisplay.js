import React from 'react';

const MessageDisplay = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <div>No messages yet.</div>;
  }

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg $x{
            message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};



export default MessageDisplay;
