import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as fetchAPI from '../../services/movies-api';
import {
  reviewStyle,
  authorStyle,
  wrapper,
  noReviews,
} from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchAPI
      .fetchMovieReviews(movieId)
      .then(res => this.setState({ reviews: res }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className={wrapper}>
        {reviews.length ? (
          reviews.map(({ author, content }) => (
            <li className={reviewStyle} key={uuidv4()}>
              <p className={authorStyle}>Author : {author}</p>
              <p>"{content}"</p>
            </li>
          ))
        ) : (
          <p className={noReviews}>No reviews yet</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
