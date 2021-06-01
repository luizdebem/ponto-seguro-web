import React from 'react'
import './Dashboard.css'
import Settings from '@material-ui/icons/Settings'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Search from '@material-ui/icons/Search'
import AgressionChart from '../../assets/agressions-graph.png'
import RobberyChart from '../../assets/robbery-graph.png'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
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
            <span style={{ color: '#2D9CDB', fontSize: '12px' }}>P Ponto Seguro</span>
          </div>

          <div className="logout">
            <PowerSettingsNew />
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome">
          <h1>Olá, Luiz Guilherme</h1>
          <p>Estas são as informações de segurança pública</p>
        </div>

        <div className="information-container">
          <div className="red box">
            <span><b>Furtos</b></span>
            <span>Total</span>
            <div>
              <span>1896</span>
            </div>
          </div>

          <div className="blue box">
            <span><b>Agressões</b></span>
            <span>Total</span>
            <div>
              <span>568</span>
            </div>
          </div>

          <div className="green box">
            <span><b>Roubos</b></span>
            <span>Total</span>
            <div>
              <span>139</span>
            </div>
          </div>

        </div>

        <div className="charts-container">
          <img src={RobberyChart} alt="Gráfico de Roubos e Furtos"></img>
          <img src={AgressionChart} alt="Gráfico de Agressões"></img>
        </div>
      </main>


    </div>
  )
}

export default Dashboard
