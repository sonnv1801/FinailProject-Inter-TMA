import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductType } from '../../../redux/actions/product.action';
import './style.css';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import {
  addType,
  deleteType,
  getAllTypeProduct,
} from '../../../redux/actions/typeProduct.action';
import './style.css';
function ListTypeAdmin() {
  const [showadd, setShowadd] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('token'));
  const [data, setData] = useState({
    name: '',
  });

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (data.name !== '') {
        let formData = new FormData();
        formData.append('name', data.name);
        dispatch(addType(formData, currentUser?.accessToken));
        setShowadd(false);
      } else {
        alert('Vui lòng nhập đầy đủ...');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const listTypeAdmin = useSelector((state) => state.defaultReducer.listType);

  const handleCloseAdd = () => {
    setShowadd(false);
  };
  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);

  return (
    <div className="container-listtypeAd">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>Type Management</p>
          </div>
          <div className="col-sm-7">
            <button
              href="#"
              class="btn btn-outline-danger"
              onClick={() => {
                setShowadd(true);
              }}
            >
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
            <th>Type name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listTypeAdmin.map((type, index) => (
            <tr>
              <td>{index}</td>

              <td>{type.name}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteType(type._id, currentUser?.accessToken));
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showadd} onHide={handleCloseAdd} className="modal">
        <ModalHeader>
          <ModalTitle>Thêm Type</ModalTitle>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form.Group className="formgroup-body">
            <Form.Label>Tên Type: </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange('name')}
              placeholder="Nhập Type..."
            />
          </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button variant="success" onClick={handleSubmit}>
            Thêm Loại
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListTypeAdmin;
