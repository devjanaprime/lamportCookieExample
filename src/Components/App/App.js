import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    favoriteCookie:''
  }

  handleChange = ( event ) =>{
    this.setState({
      favoriteCookie: event.target.value
    })
  }

  handleClick=()=>{
    console.log( 'this.state.favoriteCookie:', this.state.favoriteCookie );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cookie Example
          </p>
        </header>
        <div>
          <input type="text" onChange={ this.handleChange } placeholder="what's your favorite cookie?"></input>
          <button onClick={ this.handleClick }>Save Favorite Cookie</button>
        </div>
      </div>
    );
  }
}

export default App;
