import React from 'react';
import { Link, useMatch } from 'react-router-dom'
import './NavLink.css'

function NavLink({ label, to, activeOnlyWhenExact }) {
    // let match = useRouteMatch({
    //   path: to,
    //   exact: activeOnlyWhenExact
    // });

    const { pathName } = useMatch()

    console.log(pathName)
    
  
    // return (
    //   <div className={pathName ? "active" : ""}>
    //     <Link className={pathName && "active-link"} to={to}>{label}</Link>
    //   </div>
    // );
  }



export default NavLink;