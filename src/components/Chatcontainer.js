import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay';
import InputBox from './InputBox';

function ChatContainer() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (input) => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      generateResponse(input);
    }
  };

  const handleSendFile = async (file) => {
    if (!file) return;
  
    const fileMessage = { text: `Uploaded: ${file.name}`, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, fileMessage]);
  
    // Upload the file to the backend
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log('Server Response:', data);  // Log the server response for debugging
  
      if (response.ok) {
        // console.log('Preview content: ',data.preview);
        // Display only the preview content
        const botMessage = {
          text: data.preview || 'No content extracted.',
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        // console.log("Updated messages: ",messages)
      } else {
        const errorMessage = {
          text: data.error || 'Error uploading file.',
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      const errorMessage = {
        text: 'Error uploading file. Please try again.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };
  

  const generateResponse = (userInput) => {
    const botMessage = { text: `Bot response to: "${userInput}"`, sender: 'bot' };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div className="flex justify-center items-center justify-center w-full h-full bg-gray-100">
      <div className="w-full m-5 max-w-5xl h-[80vh] border rounded-lg shadow-md overflow-hidden">
        
        {/* Top section - White background, 20% height, including attachment and send box */}
        <div className="h-[17%] bg-white p-4 flex items-center justify-center">
          <InputBox onSendMessage={handleSendMessage} onSendFile={handleSendFile} />
        </div>
        
        {/* Bottom section - Gray background, 80% height, for messages display */}
        <div className="h-[80%] bg-gray-200 p-4 overflow-auto flex items-center space-x-2 justify-center">
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">JAVA</button>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">C++</button>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">C</button>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">PYTHON</button>
  
  <MessageDisplay messages={messages} />
</div>

        
      </div>
    </div>
  );
}

export default ChatContainer;
