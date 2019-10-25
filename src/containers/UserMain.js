import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SidebarContainer from "./SidebarContainer";
import SwipeContainer from "./SwipeContainer";
import Footer from "../components/Footer";
import "../layouts/MainContainer.css";
import Rater from "react-rater"; // for the star effect on rating
import "react-rater/lib/react-rater.css"; // for the star effect on rating

let randomNum = Math.floor(Math.random() * Math.floor(800));

class UserMain extends Component {
  state = {
    restaurants: [],
    shortlist: [],
    startIdx: randomNum,
    endIdx: randomNum + 1,
    likedRestaurants: [],
    loaded: false,
    id: this.props.match.params.id
  };

  removeRest = (e, restaurant) => {
    let newChosen = this.state.likedRestaurants.filter(
      likedRestaurant => likedRestaurant.id != restaurant.id
    );
    this.setState({
      likedRestaurants: newChosen
    }); //find the selected match on the backend via a get request to the user's matches
    fetch("https://spoon-server.herokuapp.com/api/v1/matches")
      .then(r => r.json())
      .then(matches => {
        let foundMatch = matches.find(match => {
          return (
            match.restaurant.id === restaurant.id &&
            match.user.id === parseInt(this.state.id)
          );
        }); //delete the match from the backend
        console.log(foundMatch.id);
        fetch(
          `https://spoon-server.herokuapp.com/api/v1/matches/${foundMatch.id}`,
          {
            method: "DELETE"
          }
        );
      });
  };

  //we are faking auth with our login
  //here we fetch for restaurants from our backend - 1st fetch
  //We also fetch for the specific user's likedRestaurants by grabbing their id after they log in - 2nd fetch
  componentDidMount() {
    fetch("https://spoon-server.herokuapp.com/api/v1/restaurants")
      .then(r => {
        console.log("restaurants result: ", r);
        return r.json();
      })
      .then(fetchedRes => {
        this.setState({
          restaurants: fetchedRes,
          shortlist: fetchedRes.slice(this.state.startIdx, this.state.endIdx)
        });
      });
    fetch(`https://spoon-server.herokuapp.com/api/v1/users/${this.state.id}`)
      .then(r => r.json())
      .then(user => {
        this.setState({
          likedRestaurants: user.restaurants
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
  }; //moves to the next card

  //adds to the liked list and moves to the next card
  like = (e, restaurant) => {
    let newStart = this.state.startIdx + 1;
    let newEnd = this.state.endIdx + 1;
    this.setState({
      startIdx: this.state.startIdx + 1,
      endIdx: this.state.endIdx + 1,
      shortlist: this.state.restaurants.slice(newStart, newEnd),
      likedRestaurants: [...this.state.likedRestaurants, restaurant]
    });
    //post request to persist the liked restaurant to the user's matches - backend
    // Match has a user_id and a restaurant id
    //restauarant_id: restaurant.id, user_id: this.state.id
    fetch("https://spoon-server.herokuapp.com/api/v1/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        restaurant_id: restaurant.id,
        user_id: this.state.id
      })
    })
      .then(r => {
        return r.json();
      })
      .then(match => console.log(match));
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
} //end of class

export default withRouter(UserMain);
