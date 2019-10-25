import React, { Component } from "react";
import Header from "../components/Header";
import SidebarContainer from "./SidebarContainer";
import SwipeContainer from "./SwipeContainer";
import "../layouts/MainContainer.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

let randomNum = Math.floor(Math.random() * Math.floor(800));

class MainContainer extends Component {
  state = {
    restaurants: [],
    shortlist: [],
    startIdx: randomNum,
    endIdx: randomNum + 1,
    likedRestaurants: [],
    loaded: false
  };

  removeRest = (e, restaurant) => {
    let newChosen = this.state.likedRestaurants.filter(
      likedRestaurant => likedRestaurant.id != restaurant.id
    );
    this.setState({
      likedRestaurants: newChosen
    });
  };

  //after the user logs in, we get their user id to perform a fetch request for their matched restaurants
  userUrl = () => {
    fetch(this.props.url)
      .then(r => r.json())
      .then(user => {
        this.setState({
          likedRestaurants: user.restaurants,
          loaded: true
        });
        this.props.history.push(`/spoon`);
      });
  }; //need to invoke userUrl

  componentDidMount() {
    fetch("https://spoon-server.herokuapp.com/api/v1/restaurants")
      .then(r => r.json())
      .then(fetchedRes => {
        this.setState({
          restaurants: fetchedRes,
          shortlist: fetchedRes.slice(this.state.startIdx, this.state.endIdx)
        });
      });
  }

  dislike = () => {
    let newStart = this.state.startIdx + 1;
    let newEnd = this.state.endIdx + 1;
    this.setState({
      startIdx: this.state.startIdx + 1,
      endIdx: this.state.endIdx + 1,
      shortlist: this.state.restaurants.slice(newStart, newEnd)
    });
  };

  like = (e, restaurant) => {
    // create a post request page
    console.log(e, restaurant);
    let newStart = this.state.startIdx + 1;
    let newEnd = this.state.endIdx + 1;
    this.setState({
      startIdx: this.state.startIdx + 1,
      endIdx: this.state.endIdx + 1,
      shortlist: this.state.restaurants.slice(newStart, newEnd),
      likedRestaurants: [...this.state.likedRestaurants, restaurant]
    });
  };

  render() {
    return (
      <div className="MainContainer">
        <Header />
        <SidebarContainer
          likedRestaurants={this.state.likedRestaurants}
          removeRest={this.removeRest}
        />
        <SwipeContainer
          like={this.like}
          dislike={this.dislike}
          shortlist={this.state.shortlist}
        />
      </div>
    );
  }
}

export default MainContainer;
