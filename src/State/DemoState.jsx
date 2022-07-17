import React, { Component } from "react";

export default class DemoState extends Component {
  username = "Hieu";

  // this.state: là thuộc tính có sẵn được kế thừa từ class component của thư viện js
  state = {
    status: false, //false: chưa đặng nhập, true: đã đang nhập
  };
  renderLogin = () => {
    if (this.state.status) {
      return <span className="text-white">{this.username}</span>;
    }
    return (
      <button
        className="btn btn-success"
        onClick={(e) => {
          //chặn sự kiện reload browser
          e.preventDefault();
          this.dangNhap();
        }}
      >
        Đăng Nhập{" "}
      </button>
    );
  };

  dangNhap = () => {
    console.log("đăng nhập");
    //cách 1
    this.setState({
      status: true,
    });
    // cách 2
    // let newState = { status: true };
    // this.setState(newState);    cách 2
  };

  render() {
    return (
      <div className="container">
        <h3>demo state </h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* {this.status ? (
                <span className="text-white">{this.username}</span>
              ) : (
                <button className="btn btn-success">Đăng Nhập </button>
              )} */}
              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
