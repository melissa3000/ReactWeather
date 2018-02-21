import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // Add code to be able to extract temp, humidity, pressure from cityData
    // Data structure of cityData is:
    // weather: [
    //  city: {name: 'San Francisco'}
    //  list: [
    //    {main: {temp: 85, humidity: 40, pressure: 55 }}
    //    {main: {temp: 85, humidity: 40, pressure: 55 }}
    //    {main: {temp: 85, humidity: 40, pressure: 55 }}
    //    {main: {temp: 85, humidity: 40, pressure: 55 }}
    //   ]
    // ]

    // For each item in cityData.list map over it passing each weather.main.temp to get
    // an array of each temp in the list
    const temps = cityData.list.map(weather => weather.main.temp)


    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
        </td>
      </tr>
      )
  }

  render() {
    // Because weather is an array of objects, we can map over it to produce one row
    // for each city in the table body below
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

