import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';

class ContactPage extends Component {
  render() {

    return (
        <div className='contact-page-container'>
          <ContactForm />
        </div>
    );
  }
}

export default ContactPage;
