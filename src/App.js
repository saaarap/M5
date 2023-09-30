import React, { Component } from "react";
import MyNav from "./components/MyNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import LatestRelease from "./components/LatestRelease/LatestRelease";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
          };
  }

  handleQueryChange = (newQuery) => {
    this.setState({ query: newQuery });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="App">
        <MyNav query={query} setQuery={this.handleQueryChange} />
        <Welcome />
        <LatestRelease searchQuery={query} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
