import React, { Fragment } from 'react';
import Media from 'react-media';
import { Outlet, NavLink } from 'react-router-dom';
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
              <nav>
                <ul className={styles.imgsmallnav}>
                  <li className={styles.linkimgsmall}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activelink : styles.link
                      }
                      to="/home"
                    >
                      <img
                        src={homeAvatar}
                        alt="home icon"
                        className={styles.imgsmall}
                      ></img>
                    </NavLink>
                  </li>
                  <li className={styles.linkimgsmall}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activelink : styles.link
                      }
                      to="/statistics"
                    >
                      <img
                        src={statisticsAvatar}
                        alt="statistics icon"
                        className={styles.imgsmall}
                      ></img>
                    </NavLink>
                  </li>
                  <li className={styles.linkimgsmall}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activelink : styles.link
                      }
                      to="/currency"
                    >
                      <img
                        src={currencyAvatar}
                        alt="statistics icon"
                        className={styles.imgsmall}
                      ></img>
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <Outlet />
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
              <Outlet />
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
              <Outlet />
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}
