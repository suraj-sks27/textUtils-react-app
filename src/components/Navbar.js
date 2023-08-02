import React from 'react';
import './Navbar.css';

import { UilMoon } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';

import { useState } from 'react';
import PropTypes from 'prop-types';

//!-----PROPS-----
export default function Navbar(props) {
  const [theme, setTheme] = useState(props.theme);

  //?handle theme
  const handleTheme = () => {
    //creating constants
    const moon = document.querySelector('#moon');
    const sun = document.querySelector('#sun');

    //changing theme
    setTheme(props.theme);
    let newTheme = theme;

    document.querySelector('body').classList.toggle(newTheme);
    document.querySelector('#text').classList.toggle(newTheme);

    //changing icon
    if (sun.classList.contains('hidden')) {
      sun.classList.remove('hidden');
      moon.classList.add('hidden');
    } else {
      moon.classList.remove('hidden');
      sun.classList.add('hidden');
    }
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>{props.logo}</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Conntact</li>
              <li>Phone</li>
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
