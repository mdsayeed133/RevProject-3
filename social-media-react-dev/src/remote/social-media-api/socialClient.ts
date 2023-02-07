import axios from 'axios';

// This is the configuration for sending HTTP Requests with Axios
// Very simple, but it also doesn't give us much abstraction
const socialClient = axios.create({
  withCredentials: true,
  baseURL: 'http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com',
  //headers: {
  //  'Content-Type': 'application/json',
  //  'Access-Control-Allow-Origin': 'http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com',
 //},
});

export interface socialApiResponse {
  status: number;
  payload: any;
}

export default socialClient;