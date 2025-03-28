import React from 'react';

function handleOnClick() {
  console.log('Button clicked!');
  alert('Button clicked!');
}
// Define the Button component
function Button() {
  return <button className="btn btn-primary " onClick={handleOnClick}>Click me</button>;
}

export default Button;
