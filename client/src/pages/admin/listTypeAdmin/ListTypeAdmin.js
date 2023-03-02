import React from 'react';
import './style.css';
function ListTypeAdmin() {
  return (
    <div className="container-listtypeAd">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>Type Management</p>
          </div>
        </div>
      </div>
      <table className="table">
        <thead classNane="table-dark">
          <tr>
            <th>STT</th>
            <th>Type name</th>
            <th>Add</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>

            <td>Iphone</td>

            <td>
              <button className="btn btn-success">
                <i class="bx bxs-add-to-queue"></i>
              </button>
            </td>

            <td>
              <button className="btn btn-danger">
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListTypeAdmin;
