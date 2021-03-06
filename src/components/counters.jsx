import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
