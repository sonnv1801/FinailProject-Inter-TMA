import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function RatingAd() {
  return (
    <div className="container-RatingAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý đánh giá</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead classNane="table-dark">
              <tr>
                <th>Người dùng</th>
                <th>Email</th>
                <th>Đánh giá</th>
                <th>Trạng thái</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <div
                class="spinner-border"
                role="status"
                style={{ margin: '0 auto' }}
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>
                    <p style={{ margin: '0' }}>
                      <>
                        <span>Chờ Xử Lý</span>
                        <div
                          class="spinner-border"
                          role="status"
                          style={{ margin: '0 auto' }}
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>

                      <>
                        <span>Đã Xử Lý</span>
                        <i
                          class="fa fa-check"
                          style={{
                            color: 'green',
                            fontSize: '26px',
                            margin: '6px',
                          }}
                        ></i>
                      </>
                    </p>
                  </td>
                  <td>
                    <Link to={'/admin/detailRating'}>
                      <button className="btn btn-success">
                        <i class="bx bx-edit"></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RatingAd;
