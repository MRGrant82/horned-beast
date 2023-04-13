import React, { useState } from 'react';
import data from './data.json';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main beasts={data} onBeastSelect={handleBeastSelect} />
      {selectedBeast && <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />}
      <Footer />
    </div>
  );
}

export default App;
