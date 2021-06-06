import axios from 'axios';
import { Environments } from '../environments.js';

export class BusinessService {
  static uri = Environments.URI_API;

  static headers = {
    'Content-Type': 'application/json',
    'x-auth-token': process.env.REACT_APP_JWT_TOKEN,
  }

  static createBusiness(business) {
    return axios.post(`${this.uri}/businesses`, business, { headers: this.headers });
  }

}