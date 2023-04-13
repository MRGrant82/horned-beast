import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast';


function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  function handleBeastSelect(beast) {
    setSelectedBeast(beast);
  }

  return (
    <>
      <Header />
      <Main beasts={data} onBeastSelect={handleBeastSelect} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />}
      <Footer />
    </>
  );
}

export default App;
