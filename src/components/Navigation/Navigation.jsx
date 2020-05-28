import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  navigationStyle,
  wrapper,
  navItem,
  link,
  linkActive,
} from './Navigation.module.css';

const Navigation = () => (
  <div className={navigationStyle}>
    <ul className={wrapper}>
      <li className={navItem}>
        <NavLink to="/" exact className={link} activeClassName={linkActive}>
          Home
        </NavLink>
      </li>
      <li className={navItem}>
        <NavLink to="/movies" className={link} activeClassName={linkActive}>
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
