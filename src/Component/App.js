import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './AddBuku';
import Edit from './EditBuku';
import Dashboard from './Dashboard';
import Login from './Login';
import NoMatch from './NoMatch';


class App extends Component {
  render(){
    /* <Link to={'/'}>Home</Link> */
    return (
      <Router>
          <Switch>
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Manage_Data' component={Home} />
            <Route exact path='/Add' component={Add} />
            <Route exact path='/Edit/:kd_buku' component={Edit} />
            <Route exact path='/Buku' component={Dashboard} />
            <Route exact path='/' component={Login} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}
export default App;
