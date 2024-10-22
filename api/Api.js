import axios from 'axios';

//const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = 'https://bonzuttner.online/dev';
export default class Api {
  static ApiURL = apiUrl;
  static ApiKey = 'qoKbgka1Y5qehKSTLRBJHUSTndtWLCLW';
  static call = async (requestBody, path, method, header, upload = false) => {
    let url = path ? `${this.ApiURL}${path}` : this.ApiURL;

    let headers = {
      'Content-Type': upload ? 'multipart/form-data' : 'application/json',
      auth: header
        ? header
        : localStorage.getItem('userId')
        ? localStorage.getItem('userId')
        : '',
    };
    if (upload) {
      headers.apikey = this.ApiKey;
      headers['Access-Control-Allow-Origin'] = '*';
    }
    try {
      const response = await axios[method](
        url,
        method === 'get'
          ? {
              headers: headers,
              timeout: 1200000,
            }
          : method === 'delete'
          ? {
              headers: headers,
              data: requestBody,
            }
          : requestBody,
        {
          headers: headers,
          timeout: 1200000,
        }
        // , {crossDomain: true}
      );
      return response;
    } catch (e) {
      console.log('e: ', e);
      if (e.response) {
        return e.response;
      } else return e;
    }
  };
}
