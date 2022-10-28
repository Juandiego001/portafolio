import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ReactTypeScriptMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const ReactTypeScriptMySql = () => {

  // Setting title
  useEffect(() => {
    document.title = "React + TypeScript + MySQL + Imgs | Proyecto Informático II";
    hljs.highlightAll();
  }, []);


  return (
    <div className="mb-4">
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
          React + TypeScript + MySQL + Imgs
        </h1>

        

      </Container>
    </div>
)};

ReactTypeScriptMySql.propTypes = {};

ReactTypeScriptMySql.defaultProps = {};

export default ReactTypeScriptMySql;
