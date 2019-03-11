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
    this.setState({
      smurfs: this.props.smurfs
    })
    // this.setState({
    //   ...this.props
    // })
  }

  render() {

    // if (this.props.fetching) {
    //   return (
    //     <div className="App">
    //       <header>

            
    //       </header>
    //         <Loader type='Ball-Triangle' color='#0077cc' height='40%' weight='40%' />
    //     </div>
    //   )
    // } else if (this.props.error) {
    //   return (
    //     <section className='logged-in-page-error'>
    //         <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
    //         <code>{this.props.error}</code>
    //     </section>
    //   )
    // }
    console.log('App props:   ', this.props)
    console.log('App state:   ', this.state)
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
  // smurfs: state.smurfs,
  // fetchingSmurfs: state.fetchingSmurfs,
  // error: state.error
})


export default connect(
  mapStateToProps, 
  { getSmurfs }
)(App);
