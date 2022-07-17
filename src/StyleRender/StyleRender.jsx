import React, { Component } from "react";
//dùng cách 1 khi css cho page
import "./style.css"; //cách này ảnh hưởng đến toàn bộ ứng dụng
//dùng khi class có thể bị thay đổi bởi event từ người dùng
import style from "./StyleRender.module.css";
//css inline: dùng khi giá trị style bị thay đổi bởi event từ người dùng

export default class StyleRender extends Component {
  render() {
    return (
      <div>
        StyleRender
        <p className="color-red">hello</p>
        <p className={`${style["color-blue"]} display-4`}>blue</p>
        <p
          style={{ color: "green", padding: "15px", backgroundColor: "black" }}
        >
          green
        </p>
      </div>
    );
  }
}
