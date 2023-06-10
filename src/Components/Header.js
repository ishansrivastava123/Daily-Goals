import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
      <nav>Get ready to complete your daily goals!</nav>
      <div className='links'>
        <Link to='/'>Home</Link>
        {/* <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> */}
      </div>
    </div>
  )
}

export default Header