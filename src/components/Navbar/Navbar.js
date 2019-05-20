import React from 'react';
import { Link } from '@reach/router';

import Logo from '../../images/logo-bp-mini.png';

import './Navbar.css';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      let className = props.className || '';
      className = `navbar-item ${className} ${
        isCurrent ? 'navbar-item--active' : ''
      }`;
      return {
        className
      };
    }}
  />
);

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-item" to="/">
        <img className="navbar-item__logo" src={Logo} alt="BuenaPagina.com" />
      </Link>
      <span className="navbar-menu">
        <NavLink to="/blog">Blog</NavLink>
      </span>
    </nav>
  );
}
