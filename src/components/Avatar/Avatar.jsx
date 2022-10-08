import React from 'react';

function Avatar(props) {
  return <img
    className="player_image"
    src={props.url}
    alt={props.name}
  />
}

export default Avatar;
