import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import "./index.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(x => x.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];

    console.log(counter);
    console.log(counter);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    console.log(this.state.counters.length);
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(x => x.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
