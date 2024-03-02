import { React, useState } from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

// Constants
import semesters from '../../constants/semesters';

const Menu = (props) => {
  return (
    <div className={"offcanvas-lg offcanvas-start-show pb-2 " + styles.SubmenuCourses}
    tabIndex="-1" id="offcanvas"
    >
        {
          Object.keys(semesters).map((semester, index) => {
            return (
              <div key={"semester" + index} className="container-fluid p-0 m-0 mb-3">
                <p className="m-0 p-0 ms-4 mb-2">{semester}</p>
                {
                  semesters[semester].map((course, index) => {
                    return (
                      <Link key={semester + "-" + course + "-" + index} 
                      className="mx-3 p-2" to={course.to}>{course.nombre}</Link>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
  )
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
