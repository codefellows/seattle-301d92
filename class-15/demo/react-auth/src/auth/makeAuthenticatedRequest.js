import axios from 'axios';

async function makeAuthenticatedRequest(url, method, data) {

  let request = {
    url: url,
    method: method,
    data: data,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

}
