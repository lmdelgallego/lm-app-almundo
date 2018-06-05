import React from 'react';

import './Stars.css';
import Icon from '../../Icons/Icons';

const Stars = (props) => {
  let listStars = [];
  for (let index = 0; index < props.stars; index++) {
    listStars.push(<li className="star" key={index}><Icon icon="star"/></li>)
  }
  return <ul className="Stars">{listStars}</ul>;
}

export default Stars;