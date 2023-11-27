import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import "../../styles/Header.css";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const createRoute = () => {
    if (auth?.user?.role === 1) {
      return (
        <NavLink to={`/dashboard/admin`} className="dropdown-item lowercase">
          Dashboard
        </NavLink>
      );
    } else if (auth?.user?.role === 2) {
      return (
        <NavLink to={`/dashboard/seller`} className="dropdown-item lowercase">
          Dashboard
        </NavLink>
      );
    } else {
      return (
        <NavLink to={`/dashboard/user`} className="dropdown-item lowercase">
          Dashboard
        </NavLink>
      );
    }
  };
  return (
    <>
      <div className="header-top"></div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbarFull "
        style={{ boxShadow: "none", border: "none" }}
      >
        <div className="container p-0 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img
                style={{ height: "70px", margin: "10px 0" }}
                src="/images/logo.png"
                alt="Logo"
              ></img>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link lowercase"
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle lowercase white-text "
                  style={{ color: "white" }}
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "black" }}
                >
                  <li>
                    <Link
                      className="dropdown-item lowercase"
                      to={"/categories"}
                    >
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <Link
                        className="dropdown-item lowercase"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link lowercase">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link lowercase">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle lowercase"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      {}
                      <li>{createRoute()}</li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item lowercase"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link lowercase">
                  <Badge
                    count={cart?.length}
                    showZero
                    offset={[10, -5]}
                    className="cart yellow-badge" // Adjust the font size as needed
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
