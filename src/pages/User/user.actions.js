import UserConstants from "./user.constants";

export function getUser() {
  return {
    type: UserConstants.REQUEST_DATA
  }
}

export function receiveUser(data) {
  return {
    type: UserConstants.RECEIVE_DATA,
    data
  }
}

export function getUserError(error) {
  return {
    type: UserConstants.REQUEST_ERROR,
    error
  }
}