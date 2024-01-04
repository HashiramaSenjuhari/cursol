import React, { Component } from "react";
import Carousel from "./components/Carousel.jsx";
import "./App.css";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}