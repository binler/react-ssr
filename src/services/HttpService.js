import axios from 'axios';

class HttpService {

  http;

  constructor() {
    this.http = axios.create({});
  }

  /**
   *
   * @param url
   * @param config is config of axios
   */
  get(url, config) {
    return this.http.get(url, config);
  }

  /**
   *
   * @param url
   * @param config
   */
  post(url, config) {
    return this.http.post(url, config);
  }
}

export default new HttpService();