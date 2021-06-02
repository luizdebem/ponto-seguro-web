import React from 'react'
import Header from '../Header/Header';
import './MainContent.css';

const MainContent = ({ children }) => {
  return (
    <>
      <div className="dashboard-container">
        <Header />
        {children}
      </div>

    </>
  )
}

export default MainContent
