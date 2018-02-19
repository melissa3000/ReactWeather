import React, { Component } from 'react';

export default class SearchBar extends Component {
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