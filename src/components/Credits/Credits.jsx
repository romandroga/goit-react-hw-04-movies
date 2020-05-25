import React, { Component } from 'react';
import * as fetchAPI from '../../services/movies-api';

class Credits extends Component {
  state = {
    credits: [],
  };

  componentDidMount() {
    // fetchAPI.fetchMovieCredits()
    console.log(this.props);
  }

  render() {
    return <div></div>;
  }
}

export default Credits;
