import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './addContactForm.css';

export default function AddContact() {
    return (
        <Container maxWidth="sm" className="container">
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="form-box"
            >
                <TextField
                    id="contactName"
                    label="Contact Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactUsername"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactEmail"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactPhone"
                    label="Phone"
                    variant="outlined"
                    type="tel"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactWebsite"
                    label="Website"
                    variant="outlined"
                    type="url"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactAddress"
                    label="Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <TextField
                    id="contactCompany"
                    label="Company"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <Button variant="contained" color="primary" id="addContact-btm">
                    <div className='addContact-btm-content'>
                        Add New Contact
                    </div>
                </Button>
            </Box>
        </Container>
    );
}
