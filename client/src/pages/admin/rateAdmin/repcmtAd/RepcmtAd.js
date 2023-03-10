import React from 'react';
import './style.css';
import user from '../../../../assets/user.png';
function RepcmtAd() {
  return (
    <div className="box-cmt">
      <div className="card-cmt">
        <div className="card-cmt-body">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src={user}
              alt="avatar"
            />
            <div>
              <h6 className="fw-bold text-primary mb-1">ADMIN</h6>
              <p className="text-muted small mb-0">time</p>
              <h5>alo</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepcmtAd;
