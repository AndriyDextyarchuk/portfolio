import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
  return(
    <section className={classes.navBar}>      
      <p>Dextyarchuk Andriy</p>
      <nav>
        <ul>
         {props.navItems.map((item) => <NavLink to= { item.toLowerCase()}key= { item }>
                                          { item }
                                       </NavLink>)}
        </ul>
      </nav>
    </section>
  )
}

export default Nav;