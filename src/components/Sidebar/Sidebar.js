import React from 'react'
import logo from '../../assets/logo.png';
import Dashboard from '@material-ui/icons/Dashboard';
import WarningOutlined from '@material-ui/icons/WarningOutlined';
import Store from '@material-ui/icons/Store'
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src={logo} className="logo" alt="Ponto Seguro Logo"></img>

      <div className="items-container">
        <div className="menu-item">
          <Dashboard />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <WarningOutlined />
          <span>Ocorrências</span>
        </div>
        <div className="menu-item">
          <Store />
          <span>Estabelecimentos</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
