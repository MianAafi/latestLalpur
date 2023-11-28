import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/AdminDashboard.css';

const SellerMenu = () => {
  return (
    <>
       <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Seller Panel</h4>
          <NavLink
            to="/dashboard/seller/create-product"
            className="list-group-item list-group-item-action "
            id="admin-Panel"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/seller/products"
            className="list-group-item list-group-item-action "
            id="admin-Panel"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/seller/orders"
            className="list-group-item list-group-item-action "
            id="admin-Panel"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default SellerMenu