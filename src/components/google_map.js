/*
Create component that will allow the site to display a map for the city the user
wants weather for. Building as a component (instead of as a container) because it
doesn't need to touch Redux at all, so it won't have any concept of application
state. It'll just get props from the parent component passed to it.
*/

import React, { Component } from 'react';

// Google maps api already wired in on index.html file
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // Returns reference prop called map that uses ref system in React that allows
    // you to get a direct reference to an html element that has been rendered
    // on the page. After component has been rendered to the screen, you can get
    // a direct reference to the div by referring to this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;