import React, { Component } from 'react';

class ContactsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],  // Array to store your contacts
            newContactName: '',  // Temp state for the new contact's name input
            newContactEmail: ''  // Temp state for the new contact's email input
        };
    }

    render() {
        return (
            <div className="contacts-view">
                <h2>Contacts</h2>
                
                {/* Add New Contact Form */}
                <div className="add-contact-form">
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={this.state.newContactName}
                        onChange={(e) => this.setState({ newContactName: e.target.value })}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={this.state.newContactEmail}
                        onChange={(e) => this.setState({ newContactEmail: e.target.value })}
                    />
                    <button onClick={this.handleAddContact}>Add Contact</button>
                </div>
                
                {/* Contacts List */}
                <div className="contacts-list">
                    <ul>
                        {this.state.contacts.map((contact, index) => (
                            <li key={index}>
                                <span>{contact.name}</span> - <span>{contact.email}</span>
                                <button onClick={() => this.handleRemoveContact(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    handleAddContact = () => {
        // Adding a new contact to the state
        this.setState(prevState => ({
            contacts: [...prevState.contacts, { name: prevState.newContactName, email: prevState.newContactEmail }],
            newContactName: '',
            newContactEmail: ''
        }));
    }

    handleRemoveContact = (index) => {
        // Removing a contact based on its index in the list
        const updatedContacts = [...this.state.contacts];
        updatedContacts.splice(index, 1);
        this.setState({ contacts: updatedContacts });
    }
}

export default ContactsView;
