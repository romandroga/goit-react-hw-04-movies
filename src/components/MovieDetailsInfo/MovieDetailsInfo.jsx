import React from 'react';
import styles from './MovieDetailsInfo.module.css';

const MovieDetailsInfo = ({ film, genres }) => {
  const { wrapper, imageWrapper, infoWrapper, dataWrapper } = styles;
  return (
    <div className={wrapper}>
      <button type="button">Back</button>
      <div className={dataWrapper}>
        <div className={imageWrapper}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}
          />
        </div>
        <div className={infoWrapper}>
          <p>
            {film.title} ({parseInt(film.release_date)})
          </p>
          <p>
            User score: {film.vote_average}/10 from {film.vote_count} users
          </p>
          <p>Revenue: {film.revenue}$</p>
          <p>OVERVIEW</p>
          <p>{film.overview}</p>
          <p>
            Genres:
            {!!genres &&
              genres.map(genre => (
                <span key={genre.id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;

//vote_average: 8.5
// vote_count: 459

// genres: Array(5)
// 0: {id: 16, name: "Animation"}
// 1: {id: 28, name: "Action"}
// 2: {id: 12, name: "Adventure"}
// 3: {id: 14, name: "Fantasy"}
// 4: {id: 878, name: "Science Fiction"}
