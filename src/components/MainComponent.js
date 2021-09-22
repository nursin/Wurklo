// dependenices
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Redux
import { printHello, printBye } from '../redux/ActionCreators';
import { connect } from 'react-redux';

// Components
import PostFeed from './PostFeedComponent';
import Header from './HeaderComponent';
import Home from '../pages/HomePage';
import Messenger from './MessengerComponent';
import MyProfilePage from '../pages/MyProfilePage';
import SearchWorkersPage from '../pages/SearchWorkersPage';
import SearchProjectsPage from '../pages/SearchProjectsPage';
import LoginPage from '../pages/LoginPage';

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
                <Route path='/myprofile'>
                    <MyProfilePage />
                </Route>
                <Route path='/searchworkers'>
                    <SearchWorkersPage />
                </Route>
                <Route path='/searchprojects'>
                    <SearchProjectsPage />
                </Route>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);