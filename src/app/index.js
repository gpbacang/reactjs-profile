import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
        <Profile />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
