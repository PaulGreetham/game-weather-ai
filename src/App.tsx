import React from 'react';
import './App.scss';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
        {/* <h1>Welcome to Game Weather AI</h1>
        Add your components here */}
      <Footer />
    </div>
  );
}

export default App;