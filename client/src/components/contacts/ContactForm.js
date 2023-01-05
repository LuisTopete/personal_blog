import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, fname, lname, email, phone, updateContact, setEdit }) => {
  const [contact, setContact] = useState({ fname: '', lname: '', email: '', phone: '',})

  useEffect( () => {
    if (id) {
      setContact({ fname, lname, email, phone})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEdit(false)
    } else {
      addContact(contact)
    }
    setContact({ fname: '', lname: '', email: '', phone: '',})
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input 
          name='fname'
          value={contact.fname}
          onChange={(e) => setContact({...contact, fname: e.target.value })}
          required
        />
        <label>Last name</label>
        <input 
          name='lname'
          value={contact.lname}
          onChange={(e) => setContact({...contact, lname: e.target.value })}
          required
        />
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value })}
          required
        />
        <label>Phone</label>
        <input 
          type='phone'
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;