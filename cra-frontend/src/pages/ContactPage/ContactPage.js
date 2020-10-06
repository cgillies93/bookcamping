import React, { Component } from 'react';
import './ContactPage.css'

class ContactPage extends Component {

    render() {

        return(
            <div className='contact-form-wrapper'>
                <h1>Contact Us</h1>
                <form>
                    <div className='contact-form-inner-wrapper'>
                        <div className='contact-form-name-wrapper'>
                            <label className='contact-form-label' htmlFor='name'>First Name</label>
                            <input className='contact-form-input' type='text' name='name'/>
                        </div>
                        <div className='contact-form-email-wrapper'>
                            <label className='contact-form-label' htmlFor='email'>Email</label>
                            <input className='contact-form-input' type='email' name='email'/>
                        </div>
                        <div className='contact-form-message-wrapper'>
                            <label className='contact-form-label'>Message</label>
                            <textarea className='contact-form-textarea'></textarea>
                        </div>
                        <div className='contact-form-button-wrapper'>
                            <button className='contact-form-send-button'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactPage;
