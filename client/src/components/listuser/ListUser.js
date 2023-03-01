import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser } from '../../redux/actions/user.action';
import './style.css';
function ListUser() {
  // const [show, setShow] = useState(false);

  // console.log('show di may', show);

  // const handleClose = () => {
  //   setShow(false);
  // };

  const listUsers = useSelector((state) => state.defaultReducer.listUser);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const currentUser = JSON.parse(localStorage.getItem('token'));
  console.log('listUsers-Admin', listUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(currentUser?.accessToken));
  }, []);

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
          {isLoading ? (
            <div
              class="spinner-border"
              role="status"
              style={{ margin: '0 auto' }}
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              {' '}
              {listUsers.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.role ? <p>Admin</p> : <p>User</p>}</td>
                  {currentUser?.accessToken ? (
                    <td>
                      <a
                        href="#!"
                        class="btn btn-danger"
                        onClick={() => {
                          dispatch(
                            deleteUser(item._id, currentUser?.accessToken)
                          );
                        }}
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </td>
                  ) : (
                    <div
                      class="spinner-border"
                      role="status"
                      style={{ position: 'relative', left: '50%' }}
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
    </div>
  );
}

export default ListUser;
