import React from 'react';
import './style.css';
const ts = [
  {
    id: 1,
    title: 'Bộ nhớ Trong',
    name: '128GB',
    color: 'red',
  },
  {
    id: 2,
    title: 'Bộ nhớ Trong',
    name: '128GB',
    color: 'gray',
  },
  {
    id: 3,
    title: 'Bộ nhớ Trong',
    name: '128GB',
    color: 'black',
  },
  {
    id: 4,
    title: 'Bộ nhớ Trong',
    name: '128GB',
    color: 'white',
  },
];
const Specification = () => {
  return (
    <div className="specifications">
      <b>Thông số kỹ thuật</b>

      <div className="sub-specifications">
        {ts.map((item, index) => (
          <div className="sub-body-specifications" key={index}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
