import { useState } from 'react';
import ContactForm from './ContactForm'; 

const ContactShow = ({ id, fname, lname, email, phone, updateContact, deleteContact }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <ContactForm 
            id={id}
            fname={fname}
            lname={lname}
            email={email}
            phone={phone}
            updateContact={updateContact}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h1>{fname} {lname}</h1>
          <h4>Email: {email}</h4>
          <h4>Phone: {phone}</h4>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteContact(id)}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default ContactShow;