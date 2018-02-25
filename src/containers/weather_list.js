import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // If you decide to change units:
    // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="blue" units="hPA" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    // Because weather is an array of objects, we can map over it to produce one row
    // for each city in the table body below
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
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

