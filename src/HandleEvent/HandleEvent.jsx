import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert("test");
  };

  showMessage = (name) => {
    alert("hello " + name);
  };

  render() {
    return (
      <div className="container">
        Handle Event Click
        <button
          className="btn btn-danger mx-2"
          onClick={(e) => {
            this.showMessage("hieu le");
          }}
        >
          Click
        </button>
        {/* nếu gọi thís.function() thì code sẽ ưu tiên đọc thành phương thức, load trang sẽ tự động gọi luôn */}
        <button className="btn btn-success" onClick={this.handleClick}>
          test
        </button>
        Handle Event Change
        <input
          type="text"
          className="form-control w-25"
          onChange={(e) => {
            //e.target: chính là thẻ input
            let tagInput = e.target;
            console.log("value", tagInput.value);
          }}
        />
      </div>
    );
  }
}
