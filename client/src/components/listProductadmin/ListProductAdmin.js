import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iphon from '../../assets/iphone.jpg';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Form from 'react-bootstrap/Form';
import './style.css';
function ListProductAdmin() {
  //Delete
  const [show, setShow] = useState(false);

  console.log('show di may', show);

  const handleClose = () => {
    setShow(false);
  };
  //Edit product
  const [showedit, setShowedit] = useState(false);

  console.log('show di may', show);

  const handleCloseEdit = () => {
    setShowedit(false);
  };
  const handleSubmit = () => {
    setShowedit(false);
  };
  return (
    <div className="container-listproductAd">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>Product Management</p>
          </div>
          <div className="col-sm-7">
            <button href="#" class="btn btn-outline-danger">
              <i class="bx bxs-folder-plus"></i>
              <span>Add Products</span>
            </button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead classNane="table-dark">
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name Products</th>
            <th>Type</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={iphon} />
            </td>
            <td>Iphone 12 pro</td>

            <td>Iphone</td>
            <td>
              <p>20.000.000 đ</p>
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => {
                  setShowedit(true);
                }}
              >
                <i class="bx bxs-edit-alt"></i>{' '}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Delete */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn muốn xoá sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn chắc chắn xoá sản phẩm này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Xóa đi mầy
          </Button>
        </Modal.Footer>
      </Modal>
      {/* EditProduct */}
      <Modal show={showedit} onHide={handleCloseEdit} className="modal">
        <ModalHeader>
          <ModalTitle>Sửa sản phẩm</ModalTitle>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form.Group className="formgroup-body">
            <Form.Label>Tên sản phẩm: </Form.Label>
            <Form.Control
              type="text"
              onChange=""
              value=""
              placeholder="Samsung A300"
            />
            <Form.Label>Loại: </Form.Label>
            <Form.Control
              type="text"
              onChange=""
              value=""
              placeholder="Samsung"
            />
            <Form.Label>Giá: </Form.Label>
            <Form.Control
              type="number"
              onChange=""
              value=""
              placeholder="12.000.000 đ"
            />
          </Form.Group>
          <Form.Label>Hình ảnh: </Form.Label>
          <Form.Control type="file" size="sm" />
        </ModalBody>
        <ModalFooter>
          <Button variant="success" onClick={handleSubmit}>
            Xong
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListProductAdmin;
