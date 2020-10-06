import React, { Component } from 'react';

class CreatePhoneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.ind
        }
    }

    handleChange(e) {
        this.props.handleChange(e, this.state.id);
    }

    render() {

        return(
            <div className='phone-input-wrap'>
                <select name='campground-phone-type'
                        onChange={(e) => this.handleChange(e)}>
                    <option value='main'>Main</option>
                    <option value='toll-free'>Toll-Free</option>
                    <option value='fax'>Fax</option>
                    <option value='cell'>Cell</option>
                </select>
                <input name='campground-phone'
                       id='campground-phone'
                       type='tel'
                       pattern="([0-9]){3}-[0-9]{3}-[0-9]{4}"
                       onChange={(e) => this.handleChange(e)}/>
               <button id='remove-phone'
                       onClick={(e) => this.props.removePhoneItem(e, this.state.id)}>
                   X
               </button>
            </div>

        );
    }
}

export default CreatePhoneItem;
