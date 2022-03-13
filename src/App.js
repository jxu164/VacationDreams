import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ResortPage from './components/ResortPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <div>
          <Header />
          <Hero />
          <ResortPage />
          <RegistrationForm />
          <LoginForm />
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
