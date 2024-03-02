import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  function hideMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles.ContainerHeader}>
      <nav className={styles.NavHeader}>
        <div className={styles.NavContainer}>
          <h4 className="text-light text-start mb-1 me-4">Menú</h4>
          <button className={"btn p-0 m-0 " + styles.BtnCloseMenu} onClick={hideMenu}>
            <div className={!showMenu ? styles.MakeX : ""}></div>
            <div className={!showMenu ? styles.MakeX : ""}></div>
            <div className={!showMenu ? styles.MakeX : ""}></div>
          </button>
        </div>

        <ul className={styles.NavUl + " " + (showMenu ? styles.ShowMenu : "")}>
          <li className="nav-item"><Link className={styles.LinkMenu} to="/">Home</Link></li>
          <li className="nav-item"><Link to="/cursos" className={styles.LinkMenu}>Cursos</Link></li>
          <li className="nav-item"><Link className={styles.LinkMenu} to="/evaluaciones">Evaluaciones</Link></li>
          <li className="nav-item"><Link className={styles.LinkMenu} to="/calculadoras">Calculadoras</Link></li>
        </ul>
      </nav>
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
