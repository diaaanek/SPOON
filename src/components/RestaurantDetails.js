import React, { Component } from 'react';
import MyMap from './MyMap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import '../layouts/SidebarContainer.css';

class RestaurantDetails extends Component {
  render()  {
    return (
      <div>
        <div className="RestaurantDetails">
          <h2>{this.props.restaurant.name}</h2>
          <div className="resImg">
            <img src={this.props.restaurant.image} />
          </div>
          <h3> {this.props.restaurant.price} </h3>
          <div className="react-rater-star"><b>Rating: <Rater total={5} rating={this.props.restaurant.rating} interactive={false}/></b></div>
          <h4> Tags: {this.props.restaurant.tags.map(tag=>{
            return tag.alias}).join()}</h4>
          <h3> Address: {this.props.restaurant.location1.display_address} </h3>
            </div>
            <MyMap className="map" restaurant={this.props.restaurant}/><br/>
            <button className="goback" onClick={this.props.goBack} > Go back </button>
      </div>
    )
  }
}//end of class

export default RestaurantDetails;
