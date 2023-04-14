import React, { Component } from 'react';
import data from './data.json';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornFilter from './components/HornFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      filteredBeasts: data,
    };
    this.handleBeastSelect = this.handleBeastSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleBeastSelect(beast) {
    this.setState({ selectedBeast: beast });
  }

  handleClose() {
    this.setState({ selectedBeast: null });
  }

  handleFilterChange(filter) {
    let filteredBeasts = data;
    if (filter !== '') {
      filteredBeasts = data.filter(beast => beast.horns === parseInt(filter));
    }
    this.setState({ filteredBeasts: filteredBeasts });
  }

  render() {
    const { filteredBeasts, selectedBeast } = this.state;
    return (
      <div className="App">
        <Header />
        <HornFilter beasts={data} onFilterChange={this.handleFilterChange} />
        <Main beasts={filteredBeasts} onBeastSelect={this.handleBeastSelect} />
        {selectedBeast && <SelectedBeast beast={selectedBeast} onClose={this.handleClose} />}
        <Footer />
      </div>
    );
  }
}

export default App;




// import React from 'react';
// import data from './data.json';
// import Header from './components/Header';
// import Main from './components/Main';
// import SelectedBeast from './components/SelectedBeast';
// import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedBeast: null,
//     };
//     this.handleBeastSelect = this.handleBeastSelect.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleBeastSelect(beast) {
//     this.setState({ selectedBeast: beast });
//   }

//   handleClose() {
//     this.setState({ selectedBeast: null });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Main beasts={data} onBeastSelect={this.handleBeastSelect} />
//         {this.state.selectedBeast && <SelectedBeast beast={this.state.selectedBeast} onClose={this.handleClose} />}
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
