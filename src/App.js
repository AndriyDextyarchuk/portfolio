import React, {Component} from 'react';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content'
import classes from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: ['About', 'Projects','Contacts']
    }
  }

  render(){
    return (
      <div className={classes.app}>
        <Nav navItems={this.state.navItems}/>
        <Content/>
      </div>
    )
  }
}

export default App;
