import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>


        </tbody>
      </table>
      );
  }
}

// Pull weather data into container
// Use state.weather because we defined weather in the rootReducer in index.js
function mapStateToProps({ weather }) {
  return { weather };
}



// ES6 change: Instead of
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// Use:
// function mapStateToProps({ weather }) {
//   return { weather };
// }


// When you add this, remove export default from in front of class WeatherList
export default connect(mapStateToProps)(WeatherList);

