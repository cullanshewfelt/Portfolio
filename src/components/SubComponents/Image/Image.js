import React from 'react';

const Image = (props) => {
  const { alt, height, placeholder, source, throttle } = props;
  return (
    <div
      height={height}
    >
    <img
      className="image"
      src={source}
      alt={alt}
    />
  </div>
  )
}

export default Image;
