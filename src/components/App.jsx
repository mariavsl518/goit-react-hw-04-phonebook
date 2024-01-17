import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';

export const App =()=> {

    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

   const addProfile=(name, number)=> {

      const profile = {
        id: nanoid(),
        name,
        number
      }
      const duplicateCheck = contacts.some(contact=>
        contact.name.toLowerCase()===profile.name.toLowerCase()
      );
      if (duplicateCheck)
        { alert(`Contact ${profile.name} already exists`)
          return} 
      setContacts(prevState => [...prevState, profile])
      }

    const handleFilterSearch=(evt)=>{
      setFilter(evt.target.value)
  }

    const deleteContact=(id)=>{
      setContacts(
        contacts.filter(contact=>
          contact.id!==id)
      )
    }
  
    useEffect(()=>{
      const stringifyContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringifyContacts)
    }, [contacts])
    
    useEffect(()=>{
      if(localStorage.getItem('contacts')){
        const getContacts = JSON.parse(localStorage.getItem('contacts'));
        setContacts(getContacts)
      }
    }, [])

    const filterParam = 
    contacts.filter(contact=>
    contact.name.toLowerCase().includes(
      filter.trim().toLowerCase())
    )

    return (
      <div className='formBlock'>
        <h1>Phonebook</h1>
        <ContactForm 
        addProfile={addProfile} />

        <h2>Contacts</h2>
        
        <Filter 
        handleFilterSearch={handleFilterSearch}/>

        <ContactList 
        contacts={filterParam}
        deleteContact={deleteContact}
        />
      </div>
      )  
    };
