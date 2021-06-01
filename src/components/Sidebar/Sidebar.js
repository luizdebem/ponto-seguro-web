import React from 'react'
import logo from '../../assets/logo.png';
import Dashboard from '@material-ui/icons/Dashboard';
import WarningOutlined from '@material-ui/icons/WarningOutlined';
import Store from '@material-ui/icons/Store'
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();

  const isActive = (routeName) => location.pathname === routeName;

  return (
    <div className="sidebar-container">
      <img src={logo} className="logo" alt="Ponto Seguro Logo"></img>

      <div className="items-container">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <div className={`menu-item ${isActive('/dashboard') ? 'selected' : ''}`}>
            <Dashboard />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/reports" style={{ textDecoration: 'none' }}>
          <div className={`menu-item ${isActive('/reports') ? 'selected' : ''}`}>
            <WarningOutlined />
            <span>Ocorrências</span>
          </div>
        </Link>

        <Link to="/business" style={{ textDecoration: 'none' }}>
          <div className={`menu-item ${isActive('/business') ? 'selected' : ''}`}>
            <Store />
            <span>Negócios</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
