import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReserveAside.css';

// Components //

class ReserveAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: '',
            checkOut: '',
            isValid: false
        }

        this.handleDateChange = this.handleDateChange.bind(this);
    }


    handleDateChange(e) {
        switch (e.target.name) {
            case 'checkin':
                const splitIn = e.target.value.split('-');
                const checkIn = new Date(splitIn[0], splitIn[1] - 1, splitIn[2], 0, 0, 0, 0)
                this.setState({
                    checkIn: checkIn,
                    isValid: true
                });
                const tooltip = document.getElementById('tooltip');
                tooltip.style.display = 'none';
                const inputCheckout = document.getElementById('checkout');
                splitIn[2] = parseInt(splitIn[2]) + 1;
                splitIn[2] = splitIn[2].toString();
                let checkOutMin = new Date(splitIn[0], splitIn[1] - 1, splitIn[2], 0, 0, 0, 0)
                let checkOutMinISO = checkOutMin.toISOString().split('T')[0]
                inputCheckout.min = checkOutMinISO;
                if(inputCheckout.value === '' || inputCheckout.value <= e.target.value) {
                    this.setState({
                        checkOut: checkOutMin
                    })
                    inputCheckout.value = checkOutMinISO;
                }

                break;
            case 'checkout':
            const splitOut = e.target.value.split('-');
            const checkOut = new Date(splitOut[0], splitOut[1] - 1, splitOut[2], 0, 0, 0, 0);
                this.setState({
                    checkOut: checkOut
                });
                break;
            default:
                break;
        }
    }

    handleClick(e) {
        e.preventDefault();
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'block';
    }

    render() {

        return(
            <aside>
                <h2>Check Availability</h2>
                <div className='aside-checkin'>
                    <label htmlFor='checkin'>Check-In</label>
                    <input className='aside-checkin-date'
                           name='checkin'
                           type='date'
                           onChange={(e) => this.handleDateChange(e)}/>
                    <div className="tooltip" id='tooltip'>
                        <span className="tooltiptext">
                            Please Enter Valid Check-In {'Date'}
                        </span>
                    </div>
                </div>
                <div className='aside-checkout'>
                    <label htmlFor='checkout'>Check-Out</label>
                    <input className='aside-checkout-date'
                           name='checkout'
                           type='date'
                           id='checkout'
                           onChange={(e) => this.handleDateChange(e)}/>
                </div>
                {
                    this.state.isValid ?
                    <Link to={{pathname: `${window.location.pathname}/availability`,
                              state: {checkIn: this.state.checkIn,
                                      checkOut: this.state.checkOut,
                                      campgroundId: this.props.campgroundId}
                              }}
                           className="check-availability">
                        Search
                    </Link>
                    :
                    <button className='check-availability'
                            onClick={(e) => this.handleClick(e)}>
                        Search
                    </button>
                }

            </aside>

        );
    }
}

export default ReserveAside;
