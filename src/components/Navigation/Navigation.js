import React, { Fragment } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import homeAvatar from './img/home.svg';
import statisticsAvatar from './img/statistics.svg';
import currencyAvatar from './img/currency.svg';

export default function Navigation() {
  return (
    <Media
      queries={{
        small: '(max-width: 480px)',
        medium: '(min-width: 481px) and (max-width: 720px)',
        large: '(min-width: 721px)',
      }}
    >
      {matches => (
        <Fragment>
          {/* ==========================
                  Верстка для мобильного
              ==============================*/}

          {matches.small && (
            <div>
              <nav className={styles.imgsmallnav}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/home"
                >
                  <img
                    // className={styles.linkimgsmall}
                    src={homeAvatar}
                    alt="home icon"
                    className={styles.imgsmall}
                  ></img>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/statistics"
                >
                  <img
                    // className={styles.linkimgsmall}
                    src={statisticsAvatar}
                    alt="statistics icon"
                    className={styles.imgsmall}
                  ></img>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/currency"
                >
                  <img
                    // className={styles.linkimgsmall}
                    src={currencyAvatar}
                    alt="statistics icon"
                    className={styles.imgsmall}
                  ></img>
                </NavLink>
              </nav>
            </div>
          )}

          {/* ==========================
                    Верстка для планшета
              ==============================*/}

          {matches.medium && (
            <div>
              <nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/home"
                >
                  <div>
                    <img
                      src={homeAvatar}
                      alt="home icon"
                      className={styles.img}
                    ></img>
                    Home
                  </div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/statistics"
                >
                  <img
                    src={statisticsAvatar}
                    alt="statistics icon"
                    className={styles.img}
                  ></img>
                  Statistics
                </NavLink>
              </nav>
            </div>
          )}

          {/* ==========================
                      Верстка для ПК 
              ==============================*/}

          {matches.large && (
            <div>
              <nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/home"
                >
                  <div>
                    <img
                      src={homeAvatar}
                      alt="home icon"
                      className={styles.img}
                    ></img>
                    Home
                  </div>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activelink : styles.link
                  }
                  to="/statistics"
                >
                  <img
                    src={statisticsAvatar}
                    alt="statistics icon"
                    className={styles.img}
                  ></img>
                  Statistics
                </NavLink>
              </nav>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}
