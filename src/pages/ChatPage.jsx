// src/pages/ChatPage.jsx
import ChatContainer from '../components/Chat/ChatContainer';
import { useNavigate } from 'react-router-dom';

import '../styles/ChatPage.css'; 


function ChatPage() {
    const navigate = useNavigate();
    return (
        <div className="chat-page">
        <header className="chat-header">
            <button onClick={() => navigate('/home')} className="back-button">←</button>
            <h1>Chat with SipControl</h1>
        </header>
        
        <ChatContainer />
        </div>
    );
}

export default ChatPage;