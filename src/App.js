import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advise: ""
    };
  }
  // state = {
  //   advise: ""
  // };

  componentDidMount() {
    console.log("compoennet did mount");
    // let res = axios
    //   .get("https://api.adviceslip.com/advice")
    //   .then(resolve => {
    //     const { advice } = resolve.data.slip;
    //     console.log(advice);

    //     this.setState({ advice });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log(res);
    this.fetchAdvise();
  }

  fetchAdvise = () => {
    let res = axios
      .get("https://api.adviceslip.com/advice")
      .then(resolve => {
        const { advice } = resolve.data.slip;
        console.log(advice);

        this.setState({ advice });
      })
      .catch(error => {
        console.log(error);
      });
    console.log(res);
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="btn btn-success" onClick={this.fetchAdvise}>
            Give me Advice
          </button>
        </div>
      </div>
    );
  }
}

export default App;
