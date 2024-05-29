// src/components/ContactCard.js
import React from 'react'
import './contactCards.css'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// component for contact cards 
export default function ContactCard ({ contact }) {
    return (
        <div className="contact-card">

            <div className="card-header">
                <h2>{contact.name}</h2>
                <div className="card-mod">
                    <IconButton aria-label="edit" className='icon-btm'>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className='icon-btm'>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>

            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${contact.website}`}>{contact.website}</a></p>
            <p><strong>Company:</strong> {contact.company.name}</p>
            <br />
            <address>
                <strong>Address:</strong><br />
                {contact.address.suite}, {contact.address.street},<br />
                {contact.address.city}, {contact.address.zipcode}
            </address>
        </div>
    )
}
