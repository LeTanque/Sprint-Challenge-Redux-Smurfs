import React, { Fragment } from 'react';
import { IoIosRemoveCircle, IoIosBuild } from 'react-icons/io';





class SmurfsList extends React.Component {





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
                                    </div>
                                    <div className='smurf-options'>
                                        <span className='remove-smurf'><IoIosRemoveCircle /></span>
                                        <span className='update-smurf'><IoIosBuild /></span>
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

export default SmurfsList