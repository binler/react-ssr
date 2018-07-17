import {Map} from 'immutable';

const initialState = Map({
  data: null
});

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}