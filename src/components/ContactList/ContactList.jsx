import React from 'react'
import css from './ContactList.module.css'

export const ContactList = (
    {contacts, deleteContact}
) => {

  return (
    <ul className={css.contactList}>
        {contacts.map((cont)=>
         (<li key={cont.id} className={css.contactItem}>{cont.name}: {cont.number}
         <button type='button' 
         className={css.deleteBtn}
         onClick={()=>deleteContact(cont.id)}>&times;</button>
         </li>
         ))}
      </ul>
  )
}
