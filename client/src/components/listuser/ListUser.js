import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
function ListUser() {
  const [show, setShow] = useState(false);

  console.log('show di may', show);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="container-listuser">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>User Management</p>
          </div>
          <div className="col-sm-7">
            <button href="#" class="btn btn-outline-danger">
              <i class="bx bxs-folder-plus"></i>
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead classNane="table-dark">
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>User</td>
            <td>
              <a
                class="btn btn-danger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>User</td>
            <td>
              <a
                class="btn btn-danger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>User</td>
            <td>
              <a
                class="btn btn-danger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>User</td>
            <td>
              <a
                class="btn btn-danger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn muốn xoá User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn xoá user này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Xóa đi mầy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListUser;
