import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import ListOderAdmin from '../../components/listOderAdmin/ListOderAdmin';
import ListProductAdmin from './listProductadmin/ListProductAdmin';
import ListTypeAdmin from '../../components/listTypeAdmin/ListTypeAdmin';
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
          <ListTypeAdmin />
          <ListUser />
          <ListOderAdmin />
        </div>
      </div>
    </>
  );
}

export default Adminpage;
