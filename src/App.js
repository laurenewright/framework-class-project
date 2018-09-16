import React, { Component } from "react";

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: [
        {name: "Jim", alive: true},
        {name: "Bob", alive: false},
        {name: "Billy", alive: true}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.people.map(person =>( 
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
