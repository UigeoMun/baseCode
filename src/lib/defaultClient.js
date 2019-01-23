//@flow
import axios, {type Axios} from 'axios';

axios.defaults.withCredentials = true;



const baseURL = 'http://localhost:4000/';

const defaultClient: Axios = axios.create({
    baseURL,
    withCredentials: true
});

defaultClient.defaults.timeout = 3000;

export default defaultClient;


