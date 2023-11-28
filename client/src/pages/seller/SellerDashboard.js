import React from 'react';
import SellerMenu from '../../components/Layout/SellerMenu';
import Layout from './../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import '../../styles/AdminDashboard.css';

const SellerDashboard = () => {
    const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid dashboard p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-md-3 " style={{ backgroundColor: '#19390' }}>
            <SellerMenu />
          </div>
          <div className="col-8 p-0">
            <div style={{ backgroundColor: 'transparent', border: 'none' }}>
              <h1>Seller</h1>
              <h3 className="admin_details">
                {' '}
                Seller Name : {auth?.user?.name}
              </h3>
              <h3 className="admin_details">
                {' '}
                Seller Email : {auth?.user?.email}
              </h3>
              <h3 className="admin_details">
                {' '}
                Seller Contact : {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SellerDashboard