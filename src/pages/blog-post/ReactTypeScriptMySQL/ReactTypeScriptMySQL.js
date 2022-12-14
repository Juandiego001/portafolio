import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ReactTypeScriptMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ReactTypeScriptMySql = () => {

  // Setting title
  useEffect(() => {
    document.title = "React + TypeScript + MySQL + Imgs | Proyecto Informático II";
    hljs.highlightAll();
  }, []);


  return (
    <div className="mb-4">
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          React + TypeScript + MySQL + Imgs
        </h1>
      </div>

      <Footer />
    </div>
  )
};

ReactTypeScriptMySql.propTypes = {};

ReactTypeScriptMySql.defaultProps = {};

export default ReactTypeScriptMySql;
