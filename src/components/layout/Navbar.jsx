import React from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoIosLogIn } from 'react-icons/io';
import style from './Layout.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <NavLink
          className={`${style.logo} ${({ isActive }) =>
            isActive ? style.activeLink : ''}`}
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <GiCommercialAirplane />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/createAd"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              добавить объявление
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ fontSize: '20px' }}
              to="/login"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              <IoIosLogIn />
            </NavLink>
          </li>
        </ul>
        <div className={style.cart}>
          <img src="" alt="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
