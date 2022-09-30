import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const Home = () => (
  <div>
    <Header />
    <Menu />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
