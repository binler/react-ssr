import axios from 'axios';

class HttpService {

  http;

  constructor() {
    this.http = axios.create({});
  }
  
  handleResponse(response) {
    if (response.status >= 200 && response.status < 400) {
      return Promise.resolve(response.data || {});
    }
    return Promise.reject(response.data);
  }

  /**
   *
   * @param url
   * @param config is config of axios
   */
  get(url, config) {
    return this.http.get(url, config)
      .then(response => this.handleResponse(response))
      .catch((error) => Promise.reject(error));
  }

  /**
   *
   * @param url
   * @param config
   */
  post(url, config) {
    return this.http.post(url, config)
      .then(response => this.handleResponse(response))
      .catch((error) => Promise.reject(error));
  }
}

export default new HttpService();