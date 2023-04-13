import React from 'react';
import data from './data.json';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
    };
    this.handleBeastSelect = this.handleBeastSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleBeastSelect(beast) {
    this.setState({ selectedBeast: beast });
  }

  handleClose() {
    this.setState({ selectedBeast: null });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main beasts={data} onBeastSelect={this.handleBeastSelect} />
        {this.state.selectedBeast && <SelectedBeast beast={this.state.selectedBeast} onClose={this.handleClose} />}
        <Footer />
      </div>
    );
  }
}

export default App;
