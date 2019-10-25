import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantDetails from "../components/RestaurantDetails";
import "../layouts/SidebarContainer.css";

class SidebarContainer extends Component {
  state = {
    clicked: false,
    chosenRestaurant: {}
  };

  onClick = (e, restaurant) => {
    this.setState({
      clicked: true,
      chosenRestaurant: restaurant
    });
  };

  goBack = () => {
    this.setState({
      chosenRestaurant: {}
    });
  };

  render() {
    return (
      <div className="SidebarContainer"> 
        <div className="SideCard">
          <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"}  alt="logo"/>
        </div>
     
        <div className="SideBar">
          {Object.keys(this.state.chosenRestaurant).length > 0 ? (
            <RestaurantDetails
              goBack={this.goBack}
              restaurant={this.state.chosenRestaurant}
            />
          ) : (
            this.props.likedRestaurants.map(restaurant => {
              return (
                <RestaurantCard
                  clickHandler={this.onClick}
                  removeRest={this.props.removeRest}
                  restaurant={restaurant}
                />
              );
            })
          )}
        </div>
      </div>
    );
  } //end of render
} //end of class

export default withRouter(SidebarContainer);
