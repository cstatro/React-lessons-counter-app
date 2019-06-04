import React, { Component } from "react";
export default class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-dark"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete{" "}
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const count = this.props.value;
    return count === 0 ? "Zero" : count;
  };
}
