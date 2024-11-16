import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import ChatContainer from '../components/Chatcontainer';
import MessageDisplay from '../components/MessageDisplay';
import InputBox from '../components/InputBox';

function Home() {
  return (
    <div className="app">
     
      
      <div className="flex justify-center items-center h-full ">
        <ChatContainer />
      </div>
    </div>
  );
}

export default Home;
