import React, { Component, Fragment } from "react";
require("./netFlix.css");

class Netflix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: [],
      recommendationsList: [
        "http://cdn1.nflximg.net/webp/7621/3787621.webp",
        "http://cdn1.nflximg.net/webp/1381/11971381.webp",
        "http://cdn1.nflximg.net/webp/7451/11317451.webp",
        "http://cdn5.nflximg.net/webp/5815/2515815.webp",
        "http://cdn3.nflximg.net/webp/2353/3862353.webp",
        "http://cdn0.nflximg.net/webp/3200/9163200.webp"
      ]
    };
  }

  // state = {
  //   myList: [],
  //   recommendationsList: [
  //     "http://cdn1.nflximg.net/webp/7621/3787621.webp",
  //     "http://cdn1.nflximg.net/webp/1381/11971381.webp",
  //     "http://cdn1.nflximg.net/webp/7451/11317451.webp",
  //     "http://cdn5.nflximg.net/webp/5815/2515815.webp",
  //     "http://cdn3.nflximg.net/webp/2353/3862353.webp",
  //     "http://cdn0.nflximg.net/webp/3200/9163200.webp"
  //   ]
  // };

  // remove item from my list
  handleDelete(index) {
    const myList = [...this.state.myList];
    myList.splice(index, 1);
    this.setState({
      myList
    });
  }

  // add item to my list
  handleAdd(value) {
    // let flag = 'true';
    // for (let i of this.state.myList) {
    //   if (i === value) {
    //     flag = 'flase';
    //   }
    // }
    // if (flag === 'true') {
    //   const myList = [...this.state.myList, value];
    //   this.setState({
    //     myList
    //   });
    // }
    if (!this.state.myList.includes(value)) {
      const myList = [...this.state.myList, value];
      this.setState({
        myList
      });
    }
  }

  render() {
    return (
      <Fragment>
        <img
          id={"netflix"}
          src={
            "https://secureservercdn.net/198.71.233.106/990.175.myftpupload.com/wp-content/uploads/2017/10/Netflix-Logo-Vector.jpg"
          }
          alt={""}
        ></img>
        {/* for recommendationsList part */}
        <h1>Recommendations List</h1>
        <div>
          {this.state.recommendationsList.map((value, index) => {
            return (
              <div key={index} id={"recomDiv"}>
                <img src={value} alt={""}></img>
                <button onClick={() => this.handleAdd(value)}>
                  ADD TO MY LIST
                </button>
              </div>
            );
          })}
        </div>
        <hr />

        {/* for my list part */}
        <h1>My List</h1>
        <div>
          {this.state.myList.map((value, index) => {
            return (
              <div key={index} id={"recomDiv"}>
                <img src={value} alt={""}></img>
                <button onClick={() => this.handleDelete(index)}>
                  DELETE FROM LIST
                </button>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Netflix;
