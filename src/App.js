import React, { Component } from "react";

class App extends Component {
<<<<<<< HEAD
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
=======
  constructor() {
    super();

    this.state = {
      people: [
        { name: "jim", alive: true },
        { name: "bob", alive: false },
        { name: "tim", alive: false }
      ],
      hidden: false
    };
  }

  toggleHidden = () => this.setState(state => ({ hidden: !state.hidden }));

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleHidden}> Toggle </button>
        {this.state.hidden === false && (
          <ul>
            {this.state.people.map(person => (
              <li> {person.name} </li>
            ))}
          </ul>
        )}
>>>>>>> 440b10b3f832c3d8d4ffd08bf13b635c239ca72c
      </div>
    );
  }
}

export default App;
