import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <div className="animated-gradient"></div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </AuthProvider>
  );
}

export default App;