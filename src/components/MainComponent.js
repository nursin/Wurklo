// dependenices
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Redux
import { printHello, printBye } from '../redux/ActionCreators';
import { connect } from 'react-redux';

// Components
import PostFeed from './PostFeedComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Messenger from './MessengerComponent';

const mapStateToProps = (state) => {
  return {
    Greeting: state.Greeting
  }
}

const mapDispatchToProps = {
  printHello,
  printBye
}

// component
function Main(props) {

  console.log('data', props)
  return (
    <div>
      <Header />
      {/* <Messenger /> */}
      <Switch>
        <Route exact path='/home' >
          <Home />
        </Route>
        <Route path='/myprofile' />
        <Route path='/searchjobs' />
        <Route path='/searchprojects' />
        <Route path='/settings' />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);