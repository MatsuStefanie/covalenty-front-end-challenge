import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />

        <div className='search'>
          <input type="search" name="search" id="search" />
          <button type="button" >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        <div className='spaceSmall'>
          <span className="material-symbols-outlined">person</span>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="material-symbols-outlined">favorite</span>
        </div>
      </header>
    </>
  );
}

export default Header;