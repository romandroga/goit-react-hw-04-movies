import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilmCard from './FilmCard/FilmCard';
import styles from './FilmsList.module.css';

const FilmsList = ({ films }) => (
  <ul className={styles.list}>
    {films.map(({ id, title, poster_path }) => (
      <li key={id}>
        <Link to={`movies/${id}`}>
          <FilmCard poster={poster_path} title={title} />
        </Link>
      </li>
    ))}
  </ul>
);

export default FilmsList;

// adult: false
// backdrop_path: "/9DUAR7p4SGqt2ISH2lmSzNx3uni.jpg"
// genre_ids: (3) [16, 35, 10751]
// id: 9836
// original_language: "en"
// original_title: "Happy Feet"
// overview: "Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!"
// popularity: 14.875
// poster_path: "/za41IHkj6LnkilfTzv5B2qmthKD.jpg"
// release_date: "2006-11-16"
// title: "Happy Feet"
// video: false
// vote_average: 6
// vote_count: 3361
