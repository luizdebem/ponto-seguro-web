import React from 'react'
import { useEffect, useState } from 'react';
import { ReportService } from '../../services/ReportService';
import './Reports.css';
import moment from 'moment';

const Reports = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    const res = await ReportService.getReports();
    const reports = res.data.data;
    console.log(reports);
    setReports(reports);
  }

  useEffect(() => {
    fetchReports();
  }, [])

  return (
    <div className="table-container">
      <p>OCORRÊNCIAS</p>
      {reports.length > 0 && <table>
        <tr className="table-head">
          <th>OC.</th>
          <th>Cidade</th>
          <th>Logradouro</th>
          <th>Tipo</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Detalhes</th>
        </tr>
        {reports.map((report, index) => (
          <tr className="table-body">
            <td>{index + 1}</td>
            <td>Florianópolis - SC</td>
            <td>Rua Frei Caneca</td>
            <td>{report.userType === 'PEDESTRIAN' ? 'Pedestre' : 'Motorista'}</td>
            <td>{moment(report.when).format('L')}</td>
            <td>{moment(report.when).format('LT')}</td>
            <td><button>DETALHES</button></td>
          </tr>
        ))}
      </table>}
    </div>
  )
}

export default Reports
