import * as React from "react";
import * as PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

export const Sidebar = (props) => {

  const { user } = useAuth0();

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/#" className="brand-link">
        <img src={process.env.PUBLIC_URL + '/AdminLTELogo.png'} alt="AdminLTE" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={process.env.PUBLIC_URL + '/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Alexander Pierce</a>
          </div>
        </div>

        {/* SidebarSearch Form */}
        <div className="form-inline">
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}

            <li className="nav-header">Administración</li>

            <li className="nav-item">
              <a href="/#/" className="nav-link">
                <i className="nav-icon fas fa-circle" />
                <p>
                  Almacen
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/profile">
                      <i className="far fa-circle nav-icon" />
                      <p>Ingresar contenedor</p>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin-container" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Administrar contenedores</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin-categories-container" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Administrar categorias</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

Sidebar.displayName = "Sidebar";
Sidebar.propTypes = {
  page: PropTypes.string,
};
