// src/pages/ChatPage.jsx
import ChatContainer from '../components/Chat/ChatContainer';
import '../styles/ChatPage.css'; 

function ChatPage() {
  return (
    <div className="chat-page">
      <header className="chat-header">
        <button className="back-button">←</button>
        <h1>Chat with SipControl</h1>
      </header>
      
      <ChatContainer />
    </div>
  );
}

export default ChatPage;