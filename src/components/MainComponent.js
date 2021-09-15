// dependenices
import React from 'react';
import Header from './HeaderComponent';

// Redux
import { printHello, printBye } from '../redux/ActionCreators';
import { connect } from 'react-redux';

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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);