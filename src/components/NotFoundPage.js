import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="page404">
    <h1 className="page404_h1">Ooops! Page not found</h1>
    <NavLink to="/" exact className="error404__navlink">
      Click to  Home Page
    </NavLink>
  </div>
);

export default NotFoundPage;
