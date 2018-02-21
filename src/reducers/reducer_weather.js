import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  // Add switch statement to handle only the fetch weather action type
  switch (action.type) {
    // What is the type we actually care about? FETCH_WEATHER
    case FETCH_WEATHER:
      // Cannot manipulate state directly (so no state.push(action.payload.data)),
      // instead you must return a completely new state that contains the old data
      // plus any new data
      // Concat doesn't modify the existing array, it creates a new array with
      // both the old and new stuff. Must always return a new instance of state
      // and not a modified one.

      // ES5 way to concat:
      // return state.concat([action.payload.data]);

      // ES6 way to concat: (inserts new info at the top of the array)
      return [ action.payload.data, ...state];
    }
  return state;
}