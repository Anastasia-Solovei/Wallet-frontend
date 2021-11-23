import React, { useState, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Media from 'react-media';
import path from '../../routes_path';
import Chart from '../../components/Chart';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Balance from '../../components/Balance/Balance';
import Navigation from '../../components/Navigation/Navigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import CurrencyTable from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';
import HomeTab from '../../components/HomeTab/HomeTab';
import HomeTabMobile from '../../components/HomeTabMobile';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import styles from './DashboardPage.module.css';

const Dashboard = () => {
  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.desktop && (
              <div className={styles.bcg}>
                <div className={styles.blur}>
                  <Header />
                  <Container>
                    <div className={styles.dashboard}>
                      <div>
                        <div className={styles.navigation}>
                          <Navigation />
                        </div>
                        <div className={styles.balance}>
                          <Balance />
                        </div>
                        <div>{/* <CurrencyTable /> */}</div>
                      </div>

                      <Switch>
                        <Route path={path.dashboardPage}>
                          <HomeTab />
                        </Route>

                        <Route path={path.statistic}>
                          <DiagramTab />
                        </Route>
                      </Switch>
                    </div>
                  </Container>
                </div>
              </div>
            )}

            {matches.tablet && (
              <div className={styles.bcg_tablet}>
                <div className={styles.blur}>
                  <Header />
                  <Container>
                    <div>
                      <div className={styles.dashboard_tablet}>
                        <div>
                          <Navigation />
                          <Balance />
                        </div>
                        {/* <CurrencyTable /> */}
                      </div>

                      <Switch>
                        <Route path={path.dashboardPage}>
                          <HomeTab />
                        </Route>

                        <Route path={path.statistic}>
                          <DiagramTab />
                        </Route>
                      </Switch>
                    </div>
                  </Container>
                </div>
              </div>
            )}

            {matches.mobile && (
              <>
                <Header />
                <Container>
                  <div className={styles.navigation_mobile}>
                    <MobileNavigation />
                  </div>
                  <Switch>
                    <Route path={path.dashboardPage}>
                      <div className={styles.balance_mobile}>
                        <Balance />
                      </div>
                      <HomeTabMobile />
                    </Route>
                    <Route path={path.statistic}>
                      <DiagramTab />
                    </Route>
                    <Route path={path.currency}>
                      <div className={styles.currency_mobile}>
                        {/* <CurrencyTable /> */}
                      </div>
                    </Route>
                  </Switch>
                </Container>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};

export default Dashboard;
