import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='link' to='/'>
        Logo
      </Link>
      <ul className='nav-links'>
        <Link className='link' to='about'>
          About
        </Link>
        <Link className='link' to='shop'>
          Shop
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
