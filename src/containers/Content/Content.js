import React, { Component } from 'react';
import Hotel from '../../components/Hotel/Hotel';
import './Content.css';

class Content extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="Content">
        {this.props.hotels.map( hotel => (hotel !== null) ? <Hotel key={hotel.id} hotel={hotel} /> : '' )}
      </div>
    );
  }
}

export default Content;