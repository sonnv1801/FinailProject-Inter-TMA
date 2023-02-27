import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const CartPayment = () => {
  const carts = JSON.parse(localStorage.getItem('carts'));
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(carts);

  const renderAmount = () => {
    return carts.reduce((total, item) => {
      return (total += item.newPrice * item.quantity_cart);
    }, 0);
  };
  return (
    <>
      <div className="body-left-payment">
        <p>
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Bạn có mã ưu đãi?<b>Bấm vào đây</b>
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body vocher-payment">
            <div class="input-group mb-3 sub-vocher-payment">
              <input
                type="text"
                class="form-control"
                placeholder="Nhập mã vào đê..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
        <div className="body-payment">
          <div className="infomation-users">
            <form>
              <span>Họ và tên*</span>
              <input type="text" value={user.fullname} />
              <span>Số điện thoại*</span>
              <input type="number" value={user.phone} />
              <span>Email*</span>
              <input type="email" value={user.email} />
              {/* <span>Tỉnh/ thành phố*</span>
              <select>
                <option>Quảng Ngãi</option>
                <option>Đà Nẵng</option>
              </select>
              <span>Quận/ huyện*</span>
              <select>
                <option>Hải Châu</option>
                <option>Sơn Trà</option>
              </select>
              <span>Xã/ phường*</span>
              <select>
                <option>Hải Châu</option>
                <option>Sơn Trà</option>
              </select> */}
              <span>Địa chỉ*</span>
              <input type="text" value={user.address} />
              <span>Ghi chú</span>
              <textarea></textarea>
            </form>
          </div>
          <div className="infomation-product">
            <b>Đơn hàng của bạn</b>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Tạm tính</th>
                </tr>
              </thead>
              {carts.map((item, index) => (
                <tbody>
                  <tr>
                    <td>
                      {item.title}
                      <span className="quantity-prd-payment">{`X${item.quantity_cart}`}</span>
                    </td>
                    <td>{`${item.newPrice.toLocaleString()}đ`}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="total-payment">
              <span>Giao hàng</span>
              <span>Express</span>
            </div>
            <div className="total-payment">
              <span>Tổng:</span>
              <span> {`${renderAmount().toLocaleString()}đ`}</span>
            </div>
            <span className="term">
              <input type="checkbox" />
              Tôi đồng ý điều khoản của website
            </span>
            <span className="term">
              <input type="radio" name="ship" />
              Chuyển khoản ngân hàng
            </span>
            <span className="term">
              <input type="radio" name="ship" />
              Trả tiền mặt khi giao hàng
            </span>
            <button className="order-payment">
              <Link to="/order">Đặt hàng</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
