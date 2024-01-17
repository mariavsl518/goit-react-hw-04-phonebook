import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect, useState } from "react";

export const App =()=> {

    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

   const addProfile=(name, number)=> {

      const profile={
        name,
        number
      }

      const duplicateCheck = contacts.some(contact=>
        contact.name.toLowerCase()===profile.name.toLowerCase()
      );

      if (duplicateCheck)
        { alert(`Contact ${profile.name} already exists`)
          return} 

      setContacts(contacts.concat(profile))
      }

        // useEffect(()=>{
        //       if(contacts===[]){
        //         setContacts(finalProfile)
        //       }
        //       else{
        //         setContacts(prevState=>[...prevState.contacts, finalProfile] )
        //       }
        //     },[contacts])


            // this.setState(prevState=> {
            //   if(prevState===[])
            //   {return{
            //     contacts: [formData]
            //   }}
            //   else
            //   {return {
            //     contacts: [...prevState.contacts, formData]
            //   }}
            //  })

    const handleFilterSearch=(evt)=>{
  
      setFilter(evt.target.value)
  }

    const deleteContact=(id)=>{
      setFilter(
        contacts.filter(contact=>
          contact.id!==id)
      )
    }
    
    useEffect(()=>{
      if(localStorage.getItem('contacts')){
        const getContacts = JSON.parse(localStorage.getItem('contacts'));
        setContacts(getContacts)
      }
    }, [])

    useEffect(()=>{
      if(){
        const contacts = JSON.stringify(contacts)
        localStorage.setItem('contacts', contacts)
      }
      }, [contacts])

    // componentDidMount(){
    //   if(localStorage.getItem('contacts')){
    //     const getContacts = JSON.parse(localStorage.getItem('contacts'))
    //     this.setState(
    //      {contacts: getContacts}
    //     )
    //   }
    // }

    // componentDidUpdate(prevProps, prevState){
    //   if(prevState.contacts!==this.state.contacts){
    //     const contacts = JSON.stringify(this.state.contacts)
    //     localStorage.setItem('contacts', contacts)
    //   }
    // }


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
