import React from 'react';
import './App.css';
import Hero from './Hero';
import Ways from './Ways';
import Form from './Form';
import Review from './Review';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Ways />
      <Form />
      <Review />
      <Footer />
    </div>
  );
}

export default App;