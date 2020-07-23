import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imgUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  // handleIncrement = (product) => {
  //   // console.log("Increment Clicked", this);
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  //   doHandleIncrement=()=>{
  //       this.handleIncrement({id:1});
  //   };

  styles = {
    //css properties in camel case notation
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul></ul>

        {/* <ul>
          {this.props.counter.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    //changes the color of the couter when zero to yello by 'warning' else blue
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // return this.props.counter.count === 0 ? "Zero" : this.props.counter.count;
    // return count === 0 ? <h1>Zero</h1> : count; // returning jsx expression
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
