import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  // Setting title
  useEffect(() => {
    document.title = "Home | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5">
        <h1 className="m-5">Entradas recientes</h1>


      </div>

      <Footer />
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
