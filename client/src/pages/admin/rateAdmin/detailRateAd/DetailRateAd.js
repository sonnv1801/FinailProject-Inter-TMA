import React from 'react';
import Sidebar from '../../sidebaradmin/Sidebar';
import user from '../../../../assets/user.png';
import './style.css';
function DetailRateAd() {
  return (
    <div className="container-DetailRateAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-7">
                <p>Xem chi tiết đánh giá</p>
              </div>
            </div>
          </div>

          <div className="box-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={user}
                    alt="avatar"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Username</h6>
                    <p className="text-muted small mb-0">Time - comment</p>
                    <h5>Mấy cái ngôi sao</h5>
                  </div>
                </div>

                <h5 className="mt-3">ok</h5>
              </div>
              <div className="card-footer ">
                <div className="float-end">
                  <button type="button" className="btn btn-success btn-sm">
                    Phê duyệt
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Xoá ngay và luôn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRateAd;
