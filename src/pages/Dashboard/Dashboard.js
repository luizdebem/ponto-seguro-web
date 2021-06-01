import React from 'react'
import './Dashboard.css'
import Settings from '@material-ui/icons/Settings'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Search from '@material-ui/icons/Search'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="search-container">
          <Search className="search-icon" />
          <input class="search-input" type="text" placeholder="Buscar no sistema" />
        </div>

        <span className="settings">
          <Settings />
        </span>

        <div className="about-user-container">

          <img src="https://avatars.githubusercontent.com/u/37565843?v=4" alt="Usuário"></img>

          <div className="user-section">
            <span>Luiz Guilherme</span>
            <span style={{ color: '#C6C6C6', fontSize: '12px' }}>luiz.g@pontoseguro.com</span>
            <span style={{ color: '#2D9CDB', fontSize: '12px' }}>P Ponto Seguro</span>
          </div>

          <div className="logout">
            <PowerSettingsNew />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Dashboard
