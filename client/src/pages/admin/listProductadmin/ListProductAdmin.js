import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  getProduct,
} from '../../../redux/actions/product.action';
import { Link } from 'react-router-dom';
function ListProductAdmin() {
  const [showadd, setShowadd] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const [data, setData] = useState({
    title: '',
    image: '',
    type: '',
    description: '',
    newPrice: '',
    oldPrice: '',
    quantity: '',
  });

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (
        data.title !== '' &&
        data.image !== '' &&
        data.type !== '' &&
        data.description !== '' &&
        data.newPrice !== '' &&
        data.oldPrice !== '' &&
        data.quantity !== ''
      ) {
        let formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('type', data.type);
        formData.append('description', data.description);
        formData.append('newPrice', data.newPrice);
        formData.append('oldPrice', data.oldPrice);
        formData.append('quantity', data.quantity);
        dispatch(addProduct(formData, currentUser?.accessToken));
        setShowadd(false);
      } else {
        alert('Vui lòng nhập đầy đủ...');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseAdd = () => {
    setShowadd(false);
  };

  const dispatch = useDispatch();

  const listProductAdmin = useSelector(
    (state) => state.defaultReducer.listProduct
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="container-listproductAd">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>Product Management</p>
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
            <th>Image</th>
            <th>Name Products</th>
            <th>Type</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {listProductAdmin.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>

              <td>{item.type}</td>
              <td>
                <p>{`${item.newPrice.toLocaleString()}đ`}</p>
              </td>
              <td>
                <Link to={`/admin/${item._id}`}>
                  <button className="btn btn-success">
                    <i class="bx bxs-edit-alt"></i>
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteProduct(item._id, currentUser?.accessToken));
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
          <ModalTitle>Thêm sản phẩm</ModalTitle>
        </ModalHeader>
        <ModalBody className="modal-body">
          <Form.Group className="formgroup-body">
            <Form.Label>Tên sản phẩm: </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange('title')}
              placeholder="Nhập tên sản phẩm..."
            />
            <Form.Label>Loại sản phẩm: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange('type')}
            >
              <option>Chọn loại sản phẩm</option>
              <option value="Iphone">Iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Ipad">Ipad</option>
            </Form.Select>
            <Form.Label>Mô tả sản phẩm: </Form.Label>
            <textarea
              className="form-control"
              type="text"
              onChange={handleChange('description')}
            />
            <Form.Label>Giá mới: </Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange('newPrice')}
              placeholder="Nhập giá sản phẩm..."
            />
            <Form.Label>Giá cũ: </Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange('oldPrice')}
              placeholder="Nhập giá cũ sản phẩm..."
            />
            <Form.Label>Số lượng sản phẩm: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange('quantity')}
            >
              <option>Chọn số lượng sản phẩm</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </Form.Select>
          </Form.Group>
          <Form.Label>Hình ảnh: </Form.Label>
          <Form.Control
            type="file"
            size="sm"
            accept="image/*"
            name="image"
            onChange={handleChange('image')}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="success" onClick={handleSubmit}>
            Thêm Sản Phẩm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListProductAdmin;
