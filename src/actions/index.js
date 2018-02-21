import axios from 'axios';

const API_KEY = '100ef4656c83a82e87aebf7662784d32';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// Middleware has the ability to block, modify or let pass through actions as
// they're created before they hit a reducer. Think of it as a gatekeeper.
// When the payload is a promise, it'll stop the action until the promise is resolved.
// After the promise resolves, it'll create a new action and send to reducers.
// If the payload isn't a promise, it just goes straight through to the reducers.
// This is why Redux-Promise Middleware is used so that it simplifies the application.
// Ajax request is normally asynchronous and requires a callback or promise and this
// allos us to simplify the code.


// Application state holds all of the data of our application. We only change our
// application state through reducers and actions. So, to load weather data
// we need to dispatch an action (call an action creator) which is responsible
// for making the ajax request.


// Action creator makes API request to fetch weather data. Use Axios instead of
// jquery to make Ajax request

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, us`;
  // Request does an ajax request in the form of a get to the url supplied and
  // returns a promise. Promise gets passed to the action's payload.
  const request = axios.get(url);

  // All actions must return a type, some also return a payload
  return {
    type: FETCH_WEATHER,
    // fetchWeather promise returned as payload
    payload: request
  };
}