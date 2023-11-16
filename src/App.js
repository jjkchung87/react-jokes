import React, { Component } from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList numOfJokesToGet={5} />
      </div>
    );
  }
}

export default App;
