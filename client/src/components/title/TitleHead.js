import React from 'react';
import './style.css';
function TitleHead(props) {
  console.log('typeProduct,,,,,,,,,,,', props.typeProduct);
  return (
    <div>
      <div className="title-head">
        <div className="row">
          <div className="col-8">
            <div className="title">
              <h3>Iphone</h3>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <a href="3">Iphone</a>
              </li>
              <li>
                <a href="3">Samsung</a>
              </li>
              <li>
                <a href="3">Iphone</a>
              </li>
              <li>
                <a href="3">Samsung</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleHead;
