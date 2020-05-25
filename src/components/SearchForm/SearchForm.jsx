import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={query} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {};
