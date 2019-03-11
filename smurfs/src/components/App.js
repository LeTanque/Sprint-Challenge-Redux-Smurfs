import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { FaLock, FaHome } from 'react-icons/fa';
import SmurfsList from '../components/SmurfsList';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getSmurfs } from '../actions';

// `How do I `connect` my components to redux?`
// `How do I ensure that my component links the state to props?`


class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      return (
        <div className="App">
          <header>SMURFS! 2.0 W/ Redux</header>
            <Loader type='Ball-Triangle' color='#0077cc' height='40%' weight='40%' />
        </div>
      )
    } else if (this.props.error) {
      return (
        <section className='logged-in-page-error'>
            <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
            <code>{this.props.error}</code>
        </section>
      )
    }
    return (
      <Fragment>

        <div className="App">
          <header>SMURFS! 2.0 W/ Redux</header>


          <section className="smurf-list">
            <SmurfsList smurfs={this.props.smurfs} />
          </section>


        </div>

      </Fragment>
    );
  }
}




const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
})


export default connect(
  mapStateToProps, 
  { getSmurfs }
)(App);
