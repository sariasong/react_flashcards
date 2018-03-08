import React, { Component } from 'react';


class App extends Component {

  state = {
    front: 'stuff', 
    back: 'otherstuff', 
    flip: true,
  }

  card = () => {

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlashCards 2: Revenge of React</h1>
        </header>
        <p className="App-intro">
          Flash card stuff
        </p>
      </div>
    );
  }
}

export default App;
