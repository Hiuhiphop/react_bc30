import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/black-car.jpg", //state default
  };

  render() {
    return (
      <div className="container">
        <h3>Bài tập 1: chọn màu cho xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="black-car" />
          </div>

          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                //thay doi hinh
                this.setState({
                  imgSrc: "./img/red-car.jpg",
                });
              }}
            >
              red
            </button>
            <button
              className="btn btn-dark m-2"
              onClick={() => {
                //thay doi hinh
                this.setState({
                  imgSrc: "./img/black-car.jpg",
                });
              }}
            >
              black
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                //thay doi hinh
                this.setState({
                  imgSrc: "./img/silver-car.jpg",
                });
              }}
            >
              silver
            </button>
            <button
              className="btn btn-default m-2"
              onClick={() => {
                //thay doi hinh
                this.setState({
                  imgSrc: "./img/steel-car.jpg",
                });
              }}
            >
              steel
            </button>
          </div>
        </div>

        <h3></h3>
      </div>
    );
  }
}
