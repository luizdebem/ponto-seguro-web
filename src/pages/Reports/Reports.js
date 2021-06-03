import React from 'react'
import { useEffect, useState } from 'react';
import {ReportService} from '../../services/ReportService';

const Reports = () => {

  const listReports = async () => {
    const res = await ReportService.getReports();
    console.log(res);
  }

  useEffect(() => {
    listReports();
    console.log("Reports");
  }, [])

  return (
    <div>
      Reports page
    </div>
  )
}

export default Reports
