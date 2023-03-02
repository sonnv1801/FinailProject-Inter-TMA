import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../../redux/actions/product.action';
import './style.css';
const EditProduct = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    image: '',
    type: '',
    description: '',
    newPrice: '',
    oldPrice: '',
    quantity: '',
  });

  useEffect(() => {
    fetch(`http://localhost:8000/v1/product/${path}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('image', data.image);
      formData.append('title', data.title);
      formData.append('type', data.type);
      formData.append('description', data.description);
      formData.append('newPrice', data.newPrice);
      formData.append('oldPrice', data.oldPrice);
      formData.append('quantity', data.quantity);
      dispatch(updateProduct(path, formData, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-product">
      <h2>Chỉnh sửa sản phẩm nè!</h2>
      <div className="mb-3">
        <span>Tên Sản Phẩm</span>
        <input
          className="form-control"
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange('title')}
        />
      </div>
      <div className="mb-3">
        <span>Hình Ảnh</span>
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange('image')}
        />
      </div>
      <div className="mb-3">
        <span>Loại Sản Phẩm</span>
        <select onChange={handleChange('type')}>
          <option value={data.type}>{data.type}</option>
          <option value="Iphone">Iphone</option>
          <option value="Samsung">Samsung</option>
          <option value="Ipad">Ipad</option>
        </select>
      </div>
      <div className="mb-3">
        <span>Mô tả Sản Phẩm</span>
        <textarea
          className="form-control"
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange('description')}
        />
      </div>
      <div className="mb-3">
        <span>Giá Mới</span>
        <input
          className="form-control"
          type="number"
          name="newPrice"
          value={data.newPrice}
          onChange={handleChange('newPrice')}
        />
      </div>
      <div className="mb-3">
        <span>Giá cũ</span>
        <input
          className="form-control"
          type="number"
          name="oldPrice"
          value={data.oldPrice}
          onChange={handleChange('oldPrice')}
        />
      </div>
      <div className="mb-3">
        <span>Số lượng sản phẩm</span>
        <select onChange={handleChange('quantity')}>
          <option value={data.quantity}>{data.quantity}</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="text">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
        <Link to={'/admin'}>
          <button className="btn btn-success">Thoát!</button>
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;
