import React from 'react';
import './style.css';
function TitleHead(props) {
  return (
    <div className="container-content">
      <h1>Sản Phẩm</h1>
      <div className="sub-content">
        <ul>
          {props.typeProduct.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TitleHead;
