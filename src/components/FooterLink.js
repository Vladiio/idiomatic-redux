import React from 'react';
import { NavLink } from 'react-router-dom';


const FooterLink = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '' : '/' + filter}
    exact
    activeStyle={{ textDecoration: 'none', color: 'black' }}
  >
    {children}
  </NavLink>
);

export default FooterLink;
