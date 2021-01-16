import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './AddBuku';
import Edit from './EditBuku';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';


class App extends Component {
  render(){
    /* <Link to={'/'}>Home</Link> */
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/edit/:no' component={Edit} />
            <Route path="/buku" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}
export default App;
