import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
constructor(){
    super()
    this.state={
        count:0
    }
}

handleClick=(operation)=>{
    operation='left'? this.state.count!==0 ?  this.setState({count:this.state.count-1}) :   this.setState({count:images.length-1}) : this.state.count!=images.length-1 ? this.setState({count:this.state.count+1}) :    this.setState({count:0})

}


  render() {
    return (
      <div className="carousel">
        <div
          className="innercarousel"
          style={{ backgroundImage: `url(${images[this.state.count].img})` }}>

          <div className="leftbutton" onClick={()=>this.handleClick("left")}>
            <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} />
          </div>

          <div id="centerText">
            <h1>{images[this.state.count].title}</h1>
            <p>{images[this.state.count].subtitle}</p>
          </div>

          <div className="rightbutton" onClick={()=>this.handleClick("right")}>
            <ArrowForwardIosIcon style={{ color: "white", fontSize: "30px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;