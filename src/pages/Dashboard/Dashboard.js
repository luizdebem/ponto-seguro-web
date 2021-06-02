import React from 'react'
import './Dashboard.css'
import AgressionChart from '../../assets/agressions-graph.png'
import RobberyChart from '../../assets/robbery-graph.png'

const Dashboard = () => {
  return (
    <>
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
    </>
  )
}

export default Dashboard
