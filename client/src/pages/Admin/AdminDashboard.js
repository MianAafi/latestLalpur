import React from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from './../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import '../../styles/AdminDashboard.css';
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid dashboard p-0 m-0">
        <div className="row">
          <div className="col-md-3 " style={{ backgroundColor: '#19390' }}>
            <AdminMenu />
          </div>
          <div className="col-md-9 p-0">
            <div
              className="card w-75 p-3 "
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <h1>Admin</h1>
              <h3 className="admin_details">
                {' '}
                Admin Name : {auth?.user?.name}
              </h3>
              <h3 className="admin_details">
                {' '}
                Admin Email : {auth?.user?.email}
              </h3>
              <h3 className="admin_details">
                {' '}
                Admin Contact : {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
