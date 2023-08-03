import React from 'react';
import './Navbar.css';

import { UilMoon } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';

import { useState } from 'react';
import PropTypes from 'prop-types';

//!to create React Router links
import { Outlet, Link } from 'react-router-dom';

//!-----PROPS-----
export default function Navbar(props) {
  const [theme, setTheme] = useState(props.theme);

  //?handle theme
  const handleTheme = () => {
    //creating constants
    const moon = document.querySelector('#moon');
    const sun = document.querySelector('#sun');
    const textarea = document.querySelector('#text');

    //changing theme
    setTheme(props.theme);
    let newTheme = theme;

    document.querySelector('body').classList.toggle(newTheme);
    //if the component contains textarea then only apply this
    if (document.querySelector('body').classList.contains(newTheme)) {
      textarea.classList.add(newTheme);
    } else {
      textarea.classList.remove(newTheme);
    }

    //changing icon
    if (sun.classList.contains('hidden')) {
      sun.classList.remove('hidden');
      moon.classList.add('hidden');
    } else {
      moon.classList.remove('hidden');
      sun.classList.add('hidden');
    }
  };

  //!fixing theme bugs

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>{props.logo}</h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link className="link" to="home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="QnASection">
                  About
                </Link>
              </li>
              <li>
                Contact
                {/* <Link className="link" to="contact">
                  Contact
                </Link> */}
              </li>
              <li>
                Phone
                {/* <Link className="link" to="phone">
                  Phone
                </Link> */}
              </li>
            </ul>
          </div>
          <div className="icons">
            <div id="moon">
              <UilMoon size="20" onClick={handleTheme} />
            </div>
            <div id="sun" className="hidden">
              <UilSun size="20" onClick={handleTheme} />
            </div>
            <div id="menu">
              <UilBars size="20" />
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

//!Setting propType to specify the datatype of that prop
Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};

//!Setting the default value to the prop if the value is not passed
Navbar.defaultProps = {
  logo: 'set logo here',
};
