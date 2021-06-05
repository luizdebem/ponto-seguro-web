import React from 'react'
import './Dashboard.css'
import AgressionChart from '../../assets/agressions-graph.png'
import RobberyChart from '../../assets/robbery-graph.png'

const Dashboard = () => {
  return (
    <>
      <main className="main-content">
        <div className="welcome">
          <h1><b>Olá, Luiz Guilherme</b></h1>
          <p>Estas são as informações de segurança pública.</p>
        </div>

        <div className="information-container">
          <div className="red box">
            <span className="box-title"><b>Furtos</b></span>
            <span>Total</span>
            <div>
              <span className="box-value"><b>1896</b></span>
            </div>
          </div>

          <div className="blue box">
            <span className="box-title"><b>Agressões</b></span>
            <span>Total</span>
            <div>
              <span className="box-value"><b>568</b></span>
            </div>
          </div>

          <div className="green box">
            <span className="box-title"><b>Roubos</b></span>
            <span>Total</span>
            <div>
              <span className="box-value"><b>139</b></span>
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
