import HttpService from "./HttpService";

class User {

  getData() {
    return HttpService.get('https://randomuser.me/api/');
  }

}

export default new User();