import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "./Navbar";
import "./checkup.css";
import gender from "./images/gender.jpg";

export default class checkup extends Component {
  render() {
    return (
      <div>
        <br></br>
        <div class="card-center ">
          {" "}
          <div class="card m-4">
            <div class="card-body">
              <br></br>
              <h5 class="card-title">Hello!</h5>
              You will start checking your prognosis by typing your
              symptoms separated by coma.After that you will get the prediction
              what disease you may have (based on your given symptoms)
            </div>
          </div>{" "}
        </div>
        <div class="card-t ">
          {" "}
          <br></br>
          <div class="card-body">
            {" "}
            <h5 class="card-title">Please Add Your Symptoms </h5>
            <br></br>{" "}
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
