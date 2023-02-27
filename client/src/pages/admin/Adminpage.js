import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import ListOderAdmin from '../../components/listOderAdmin/ListOderAdmin';
import ListProductAdmin from '../../components/listProductadmin/ListProductAdmin';
import ListUser from '../../components/listuser/ListUser';
import Sidebar from '../../components/sidebaradmin/Sidebar';
import './style.css';
function Adminpage() {
  return (
    <>
      <div className="container-admin">
        <div className="left-container-admin">
          <Sidebar />
        </div>
        <div className="right-container-admin">
          <Dashboard />
          <ListProductAdmin />
          <ListUser />
          <ListOderAdmin />
        </div>
      </div>
    </>
  );
}

export default Adminpage;
