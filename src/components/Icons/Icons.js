import React from 'react';
import PropTypes from 'prop-types';

import iconPaths from './icons.json';// the file exported from IcoMoon

function getPath(iconName) {
  const icon = iconPaths.icons.find( (icon) => icon.tags[0] === iconName )// icon.properties.name === iconName);

  if (icon) {
    return icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

const Icon = props => (
  <svg width="20" height="20" viewBox="0 0 1024 1024">
    <path d={getPath(props.icon)}></path>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
