import _axios from 'axios';

// create axios instance

const axios = baseURL => {
    const instance = _axios.create({
        baseURL: baseURL || 'http://localhost:3300',
        timeout: 1000
      });
      return instance
}


export{ axios }

export default axios();