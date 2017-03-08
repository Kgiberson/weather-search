import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
    // make sure you're returning a new instance of state
		// return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ]; //es6syntax
  }
  return state;
}
