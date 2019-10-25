import React, { Component } from "react";
import "../layouts/SidebarContainer.css";

class RestaurantCard extends Component {
  render() {
    return (
      <div>
        <div
          className="RestaurantCard"
          onClick={e => this.props.clickHandler(e, this.props.restaurant)}
        >
          <img
            id="img-profile"
            alt={this.props.restaurant.name}
            className="img-circle"
            src={this.props.restaurant.image}
          />
          <div
            style={{ display: "block", marginLeft: ".5em", textAlign: "left" }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#424242",
                lineHeight: "15px"
              }}
            >
              {this.props.restaurant.name}
            </h3>
            <p>Something Elese</p>
          </div>
          <br />

          <i
            onClick={e => this.props.removeRest(e, this.props.restaurant)}
            className="fa fa-close fa-2x"
            style={{ color: "red", marginRight: ".5em" }}
          ></i>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
