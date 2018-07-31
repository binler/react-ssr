import UserConstants from "./user.constants";
import {_assign} from "../../utils/helpers";

const initialState = {
  data: null,
  fetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UserConstants.REQUEST_DATA:
      return _assign(state, {
        fetching: true
      });
    case UserConstants.REQUEST_ERROR:
      return _assign(state, {
        fetching: false
      });
    case UserConstants.RECEIVE_DATA:
      return _assign(state, {
        fetching: false,
        data: action.data
      });
    default:
      return state;
  }
}