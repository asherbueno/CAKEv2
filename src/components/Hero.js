import React from 'react';

const Hero = (props) => {
  return (
    <header className="top">
      <h1> Landing Page </h1>
      <h3 className="tagline">{props.tagline}</h3>
      </header>
  )
}


export default Hero;
