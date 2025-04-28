// src/App.js
import React from 'react';
import ChatPage from './pages/ChatPage';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { UserProvider } from './context/UserProvider';

import './styles/AuthPage.css'
import './App.css';


function App() {
  return (
    <div className="App">
        <UserProvider>
            <AuthPage />
        </UserProvider>
    </div>
  );
}

export default App;