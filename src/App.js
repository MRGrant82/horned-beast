import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import imgArr from './data.json';
import data from './data.json';


function App() {
  return (
      <div>
        <Header />
        <Main loadContent = {imgArr} />
        <Footer />
      </div>
     );
}

export default App;
