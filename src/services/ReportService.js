import axios from 'axios';
import { Environments } from '../environments.js';

export class ReportService {
  static uri = Environments.URI_API;

  static headers = {
    'Content-Type': 'application/json',
    'x-auth-token': process.env.REACT_APP_JWT_TOKEN,
  }

  static getReports() {
    return axios.get(`${this.uri}/reports`, { headers: this.headers });
  }

}