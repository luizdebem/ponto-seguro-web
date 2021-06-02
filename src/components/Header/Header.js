import { PowerSettingsNew, Search, Settings } from '@material-ui/icons';
import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="dashboard-header">
    <div className="search-container">
      <Search className="search-icon" />
      <input className="search-input" type="text" placeholder="Buscar no sistema" />
    </div>

    <span className="settings">
      <Settings />
    </span>

    <div className="about-user-container">

      <img src="https://avatars.githubusercontent.com/u/37565843?v=4" alt="Usuário"></img>

      <div className="user-section">
        <span>Luiz Guilherme</span>
        <span style={{ color: '#C6C6C6', fontSize: '12px' }}>luiz.g@pontoseguro.com</span>
        <div className="ponto-seguro-label">
          <img src={logo} alt="ponto seguro logo" style={{ width: '12px', marginRight: '5px' }}></img>
          <span>Ponto Seguro</span>
        </div>
      </div>

      <div className="logout">
        <PowerSettingsNew />
      </div>
    </div>
  </header>
  )
}

export default Header
