import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import main from "./images/main.jpg";
import covid from "./images/covid.jpg";
import mask from "./images/mask.jpg";
import vacc from "./images/vacc.jpeg";
import statistics from "./images/statistics.jpg";
//import { ArrowRight } from "react-bootstrap-icons";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    fetch("https://www.who.int/feeds/entity/hac/en/rss.xml")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let news = data.results.map((news) => {
          return <div key={news.results}></div>;
        });
        this.setState({ news: news });
        console.log("state", this.state.news);
      });
  }
  render() {
    return (
      <div>
        <div class="container">
          <meta
            name="description"
            content="TheHousepital guides you through the health checkup process. Anonymously and at absolutely no cost! It analyses your symptoms and identifies potential causes. Artificial Intelligence algorithms render our symptom checker innovative, smart, and accurate."
          />
          <meta
            name="keywords"
            content="diagnosis online, symptom checker, symptoms checker, online checkup, symptoms, conditions, diseases, health check, doctor online, virtual doctor, virtual diagnosis, infermedica, artificial intelligence, medical questions, health form, health, medical, doctor, medical consultation, symptom analysis, asses your symptoms"
          ></meta>

          <img src={main} class="main" />
<div class=" ttext-block">
            <h4>What concerns you about your health today?</h4>
            <p>Check your symptoms and find out what could be causing them!</p>
            
            <br></br> <br></br> <br></br>
            <h4>Click Here To Start Now:</h4>
            <button class=" btn-lg btn-success" type="submit">
              <Link to="/checkup"> Start Checkup</Link>
            </button>
          </div>
        </div>
        <div class="">
          <label for="exampleFormControlTextarea1"></label>
          <area class="" id="exampleFormControlTextarea1" rows="3"></area>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <div class="container">
            <img src={covid} class="covid" />
            <h2>
              <a
                class="section"
                href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/what-you-need-to-know-about-coronavirus-covid-19"
              >
               READ MORE 
              </a>
            </h2>
          </div>
        </div>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <div class="card-deck ">
          <div class="card m-5">
            <img class="card-img" src={mask} alt="Card image cap" />
            <h5 class="card-title">When and how to use masks?</h5>
            <br></br>
            <div class="card-body">
              {this.state.news}
              Read More
            </div>
          </div>
          <div class="card m-5">
            {" "}
            <img class="card-img" src={vacc} alt="Card image cap" />
            <h5 class="card-title">
              Who welcomes crucial new funding for vaccines?
            </h5>
            <div class="card-body">
              {this.state.news}
              Read More
            </div>
          </div>
          <div class="card m-5">
            <img class="card-img " src={statistics} alt="Card image cap" />
            <h5 class="card-title">World Health Statistics 2020</h5> <br />
            <div class="card-body">
              {this.state.news}
              Read More
            </div>
          </div>
        </div>
        <div></div>
        <br></br>
        <br></br>
        <br></br>
        <footer />
        <div class="footer " id="footer">
          <div class="container ">
            <div class="row">
              <div class="col-lg-6  col-md-6 col-sm-6 col-xs-6">
                <h4> TheHousepital</h4>
              </div>
              <div class="col-lg-3 col-sm-2 col-xs-3">
                <h3> Contact </h3>
                <ul>
                  <li>
                    <a class="email" href="#">
                      {" "}
                      insert email here{" "}
                    </a>
                  </li>
                  <br />
                </ul>
              </div>
              <div class="col-lg-3 col-sm-2 col-xs-3">
                <ul>
                  <li>
                    {" "}
                    <br />
                    <a href={"/about"}> ABOUT US</a>
                  </li>
                  <li>
                    <a href="#"> CURRENT SERIES </a>{" "}
                  </li>
                  <li>
                    <a href="#"> THE HOUSE </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <p class="pull-left copyright">
                {" "}
                Copyright © TheHousepital 2020. All right reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
