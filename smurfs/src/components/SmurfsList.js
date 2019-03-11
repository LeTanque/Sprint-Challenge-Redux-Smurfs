import React, { Fragment } from 'react';
import { IoIosRemoveCircle, IoIosBuild } from 'react-icons/io';
import { connect } from 'react-redux';

import { removeSmurf } from '../actions';




class SmurfsList extends React.Component {



    removeSmurf = (smurfName) => {
        this.props.removeSmurf(smurfName);
    }


    render () {
        console.log('SmurfList props:   ', this.props)
        return (
            <Fragment>
                <section className="smurf-list">
                    <ul>
                        {this.props.smurfs.map(smurf => (

                            <Fragment key={smurf.name + Math.random()} >

                                <li>
                                    <div className='smurf-name'>
                                        {smurf.name}
                                        <br></br>
                                        {smurf.age}
                                        <br></br>
                                        {smurf.height}
                                    </div>

                                    <div className='smurf-options'>
                                    
                                        <span className='remove-smurf'>
                                            <IoIosRemoveCircle onClick={()=>this.removeSmurf(smurf.name)}/>    
                                        </span>

                                        <span className='update-smurf'>
                                            <IoIosBuild />
                                        </span>

                                    </div>
                                </li>
                                
                            </Fragment>

                        ))}
                    </ul>
                </section>
            </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    ...state
})
  
  
export default connect(
    mapStateToProps, 
    { removeSmurf }
)(SmurfsList);
  