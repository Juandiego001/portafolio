import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Page not found 404 | Juan Diego Cobo Cabal</title>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Lo sentimos
          </h1>

          <p>
            La página que buscas no ha sido encontrada (error 404).
          </p>
        </div>

        <Footer />
      </div>

    </>
  )
}

ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;
