import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { getSmurfs } from '../actions';


class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            age:'',
            height:''
        }
    }
  

  addSmurf = event => {
    event.preventDefault();
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
    this.props.addSmurfPost(event, this.state)
  }

  handleInputChange = event => {
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({ [event.target.name]: value });
  };


  render() {
      console.log('This state smurfform:  ', this.state)
      console.log('This props smurfform:  ', this.props)
    return (
      <div className="SmurfForm">

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type='text'
          />
          <button type="submit" className='btn-primary'>Add to the village</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
})
  
  
export default connect(
    mapStateToProps, 
    {  }
)(SmurfForm);
  
// export default SmurfForm