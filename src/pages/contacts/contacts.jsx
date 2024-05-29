import React, { useEffect, useState } from 'react';
import callAPI from '../../utilities/callAPI.js';
import ContactCard from '../../components/contactCards.jsx';
import NavBar from '../../components/navBar.jsx'
import ContactForm from '../../components/addContactForm.jsx'
import '../global.css'
import './contacts.css'

// contact page of the application
export default function Contacts () {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        callAPI('https://jsonplaceholder.typicode.com', 'users')
        .then(data => {
        if (data) {
            setContacts(data);
        }
    })
    .catch(error => console.error('Error fetching contacts:', error));
}, [])

    return (
    <div className="contacts-page">
        <NavBar/>
        <div className='main-container'>
            <div className='side-container '>
            </div>
            <div className='content-section'>
                <br />
                <div className="form-container">
                    <ContactForm />
                </div>
                <div className="contacts-list">
                    {contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))}
                </div>
            </div>
            <div className='side-container '>
            </div>
        </div>
    </div>
    )
}
