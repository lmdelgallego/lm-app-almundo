import React from 'react';

import './Amenities.css';
import Icon from '../../Icons/Icons';

const Amenities = (props) => {
    return (
      <ul className="Amenities">
        {props.amenities.map((amenity,i) => <li key={i} className="Amenity" title={amenity}><Icon icon={amenity}/></li> )}
      </ul>
    );
}

export default Amenities;