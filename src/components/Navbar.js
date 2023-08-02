import React from 'react';
import './Navbar.css';
import { UilMoon } from '@iconscout/react-unicons';
import { useState } from 'react';
import { UilBars } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';

//!-----PROPS-----
export default function Navbar(props) {
  const [theme, setTheme] = useState(props.theme);

  //handle theme
  const handleTheme = () => {
    setTheme(props.theme);
    let newTheme = theme;
    document.querySelector('body').classList.toggle(newTheme);
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
            <UilMoon size="20" onClick={handleTheme} />
            <UilBars size="20" />
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
