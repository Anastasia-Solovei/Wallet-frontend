import React from 'react';
import { NavLink } from 'react-router-dom';
import path from '../../routes_path';

import styles from './Navigation.module.css';
import sprite from '../../images/svg_sprite.svg';

export default function Navigation() {
  return (
    <>
      <nav className={styles.imgsmallnav}>
        <NavLink
          className={styles.link}
          activeClassName={styles.activelink}
          exact
          to={path.dashboardPage}
        >
          <svg className={styles.img}>
            <use href={sprite + '#icon-home'}></use>
          </svg>
          Home
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.activelink}
          exact
          to={path.statistic}
        >
          <svg className={styles.img}>
            <use href={sprite + '#icon-statistics'}></use>
          </svg>
          Statistics
        </NavLink>
      </nav>
    </>
  );
}
