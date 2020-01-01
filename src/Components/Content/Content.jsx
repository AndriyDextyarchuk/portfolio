import React from 'react'
import classes from './Content.module.css'
import {Route} from 'react-router-dom'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import Projects from './Projects/Projects'

const Content = () => {
      return(
        <main className={classes.content}>
          <Route path='/projects' component={Projects}/>
          <Route path='/about'  component={About}/>
          <Route path='/contacts' component={Contacts}/>
        </main>
      )
}

export default Content