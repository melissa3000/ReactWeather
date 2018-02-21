import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// Remove export default when you add the mapDispatchToProps function at the bottom
class SearchBar extends Component {
  // initialize component level state by creating a constructor
  constructor(props) {
    super(props);

    // set up state to be this.state.term (meaning search term) and set the default
    // to an empty string so that when it first shows up, it's completely empty
    this.state = { term: '' };

    // Bind the context of onInputChange. Often required when your callback has a
    // reference to 'this' (for example, onChange={this.onInputChange} and this.setState({ term: event.target.value }))
    // If you forget, the error shows setState as undefined
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Create change handler to be used for updating input below
  onInputChange(event) {
    // set state when text is entered into search bar
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // Form will not try to submit itself to the server so we can intercept and
    // fetch weather data for the user
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    // clear search input after each search so user sees the search bar cleared
    this.setState({ term: '' });
  }

  render() {
    return (
      // update state by using a change handler on the input
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


// Connect action creator fetchWeather to searchBar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null as first argument because mapDispatchToProps has to be the second argument
export default connect(null, mapDispatchToProps)(SearchBar);




