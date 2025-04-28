// src/components/Chat/ChatContainer.jsx
import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import InputBar from './InputBar';
import './ChatContainer.css';
import Celebration from './Celebration';

function ChatContainer() {
  // Messages state
  const [messages, setMessages] = useState([
    // Initial welcome message
    { 
      id: 1, 
      text: 'Good morning Yolanda! How did you sleep last night? Any cravings or challenges so far today?', 
      sender: 'bot' 
    }
  ]);
  
  // Reference for auto-scrolling
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle sending a new message
  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Add user message to the chat
    const newUserMessage = {
      id: Date.now(),
      text,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // In a real app, you'd call your API here
    // For the hackathon demo, we can simulate the response
    setTimeout(() => {
      // Simulate bot response based on user input
      let botResponse;
      
      // Demo response logic
      if (text.toLowerCase().includes('party') || text.toLowerCase().includes('drink')) {
        // User is worried about a drinking situation
        botResponse = {
          id: Date.now() + 1,
          text: 'Social events can be tricky. Would you like some tips for how to say "no" if someone offers you a drink?',
          sender: 'bot',
          specialType: 'tips'
        };
      } else if (text.toLowerCase().includes('good') || text.toLowerCase().includes('sober')) {
        // User has maintained sobriety
        botResponse = {
          id: Date.now() + 1,
          text: "That's great to hear! You maintained the record for 5 days. Stay sober 3 more days until you reach your goal!",
          sender: 'bot',
          specialType: 'celebration'
        };
      } else {
        // Default response
        botResponse = {
          id: Date.now() + 1,
          text: "Thank you for sharing. How are you feeling about your progress today?",
          sender: 'bot'
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000); // Simulate API delay
  };
  
  return (
    <div className="chat-container">
      <div className="messages-area">
        {messages.map(message => (
          <Message 
            key={message.id}
            text={message.text}
            sender={message.sender}
            specialType={message.specialType}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <Celebration />
      <InputBar onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatContainer;