import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import './NavLink.css'

function NavLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        <Link className={match && "active-link"} to={to}>{label}</Link>
      </div>
    );
  }



export default NavLink;