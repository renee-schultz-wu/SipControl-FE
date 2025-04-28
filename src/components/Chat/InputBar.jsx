// src/components/Chat/InputBar.jsx
import React, { useState } from 'react';
import './InputBar.css';

function InputBar({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <form className="input-bar" onSubmit={handleSubmit}>
        <button 
            type="button" 
            className="voice-button"
            disabled={disabled}
        >
        <span role="img" aria-label="microphone">🎤</span>
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send a message ..."
        className="message-input"
        disabled={disabled}
      />
      <button type="submit" className="send-button" disabled={disabled}>
        <span role="img" aria-label="send">📤</span>
      </button>
    </form>
  );
}

export default InputBar;