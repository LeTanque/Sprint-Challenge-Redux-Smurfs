import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { IoIosAddCircle } from 'react-icons/io';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { getSmurfs } from '../actions';

import SmurfsList from '../components/SmurfsList';
import SmurfForm from '../components/SmurfForm';





// `How do I `connect` my components to redux?`
// `How do I ensure that my component links the state to props?`


class App extends Component {
  state = {
    // ...this.props,
    smurfs:[],
    
  }

  componentDidMount() {
    this.props.getSmurfs();
    // this.setState({
    //   smurfs: this.props.smurfs
    // })
  }

  render() {
    
    // console.log('App props:   ', this.props)
    // console.log('App state:   ', this.state)

    if (this.props.fetching) {
      return (
        <Fragment>
          <div className="App">
            <Loader type='Ball-Triangle' color='#0077cc' height='40%' weight='40%' />
            <code>Loading...</code>
          </div>
        </Fragment>
      )
    } else if (this.props.error) {
      return (
        <Fragment>
          <div className="App">
            <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
            <code>{this.props.error}</code>
          </div>
        </Fragment>
      )
    }
    
    return (
      <Fragment>
        <BrowserRouter>

        
          <div className="App">
            <header>
              <div className='nav-name'>
                <Link to='/'>
                  SMURFS<code className='cred'>2.0</code>&nbsp; redux
                </Link>
              </div>
              <div className='nav-icons'>
                <Link to='/smurf-form'  ><IoIosAddCircle  /> Add Smurf</Link>

              </div>
            </header>


            
            <SmurfsList smurfs={this.props.smurfs} />
            


            <Route 
              path='/smurf-form' 
              render={props => (
                <SmurfForm 
                  // {...props} 
                  smurfs={props.smurfs}
                  // removeSmurf={this.removeSmurf}
                  // setActiveSmurf={this.setActiveSmurf}
                />
              )}
            />
            
            
          </div>
          

        </BrowserRouter>
      </Fragment>

    );
  }
}




const mapStateToProps = state => ({
  ...state
})


export default connect(
  mapStateToProps, 
  { getSmurfs }
)(App);
