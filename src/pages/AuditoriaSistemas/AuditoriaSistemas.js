import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AuditoriaSistemas.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AuditoriaSistemas = () => {
  return (
    <>
      <Helmet>
        <title>Auditoría de sistemas | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Auditoría de sistemas en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          auditoría de sistemas,
          auditoria sistemas,
          auditoría de sistemas juan diego cobo cabal,
          auditoría de sistemas juan diego cobo,
          auditoría de sistemas juan diego,
          auditoría de sistemas juan,
          Auditoría de sistemas JDCC,
          Auditoria de sistemas JDCC,
          Auditoría sistemas Juan Diego Cobo Cabal,
          Auditoría sistemas Juan Diego Cobo,
          Auditoría sistemas Juan Diego,
          Auditoría sistemas Juan,
          Auditoría de sistemas Juan Diego Cobo Cabal,
          Auditoría de sistemas Juan Diego Cobo,
          Auditoría de sistemas Juan Diego,
          Auditoría de sistemas Juan,
          Auditoria de sistemas Juan Diego Cobo Cabal,
          Auditoria de sistemas Juan Diego Cobo,
          Auditoria de sistemas Juan Diego,
          Auditoria de sistemas Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Auditoría de sistemas
          </h1>

        </div>

        <Footer />

      </div>
    </>
  )
}

AuditoriaSistemas.propTypes = {};

AuditoriaSistemas.defaultProps = {};

export default AuditoriaSistemas;
