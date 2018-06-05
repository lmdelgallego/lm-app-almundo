import React from 'react';
import './Hotel.css';
import Amenities from './Amenities/Amenities';
import Stars from './Stars/Stars';

const Hotel = (props) => {
  
    return (
      <div className="Hotel">
        <div className="image" style={{backgroundImage: `url(./assets/images/hotels/${props.hotel.image})`}}>
        </div>
        <div className="description">
          <h3>{props.hotel.name}</h3>
          <Stars stars={props.hotel.stars}/>
          <Amenities amenities={props.hotel.amenities}/>
        </div>
        <div className="price-description">
          <span className="label">Precio por noche por habitación</span>
          <span className="price">
            <span className="currency">ARS</span>
            <span className="amount">{Intl.NumberFormat('ars-DE', { maximumSignificantDigits: 3 }).format(props.hotel.price)}</span>
          </span>
          <button>Ver Hotel</button>
        </div>
      </div>
    );
}

export default Hotel;