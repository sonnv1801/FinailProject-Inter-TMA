import React from 'react';
import './style.css';
function TitleHead(props) {
  console.log('typeProduct,,,,,,,,,,,', props.typeProduct);
  return (
    <div className="container-content">
      <h1>Iphone</h1>
      <div className="sub-content">
        <ul>
          <li>Samsung</li>
          <li>Samsung</li>
          <li>Samsung</li>
          <li>Samsung</li>
        </ul>
      </div>
    </div>
  );
}

export default TitleHead;
