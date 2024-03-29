import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contacts, setContacts] = useState([])


  useEffect( () => {
    axios.get(`/api/contacts`)
      .then( res => setContacts(res.data))
      .catch( err => console.log(err))
  }, [])

  const addContact = (contact) => {
    axios.post(`/api/contacts`, { contact })
      .then( res => setContacts([...contacts, res.data]))
      .catch( err => console.log(err))
  }

  const updateContact = (id, contact) => {
    axios.put(`/api/contacts/${id}`, { contact })
      .then( res => {
        const newUpdatedContacts = contacts.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setContacts(newUpdatedContacts)
      })
      .catch( err => console.log(err))
  }

  const deleteContact = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then( res => setContacts( contacts.filter( c => c.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <ContactForm addContact={addContact} />
      <h1>All Contacts</h1>
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </>
  )
}

export default Contacts;