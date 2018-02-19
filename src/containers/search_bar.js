import React, { Component } from 'react';

export default class SearchBar extends Component {
  // initialize component level state by creating a constructor
  constructor(props) {
    super(props);

    // set up state to be this.state.term (meaning search term) and set the default
    // to an empty string so that when it first shows up, it's completely empty
    this.state = { term: '' };
  }

  // Create change handler to be used for updating input below
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      // update state by using a change handler on the input
      <form className="input-group">
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