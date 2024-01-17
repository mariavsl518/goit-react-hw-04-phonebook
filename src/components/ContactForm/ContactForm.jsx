// import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';


export const ContactForm=({addProfile})=> {

const [name, setName] = useState('');
const [number, setNumber] = useState('');

  const handleSubmit=(evt)=>{

    evt.preventDefault();

    setName(evt.currentTarget.elements.name.value);
    setNumber(evt.currentTarget.elements.number.value);
    
    addProfile(name, number);

    evt.currentTarget.reset();
  }

    return (
      <form 
      className={css.form}
      onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.formLabel}> 
        <span className={css.formLabelHeader}>Name</span>
        <input type="text" name="name" placeholder='Klavdia Petrivna' className={css.formInput} required />
      </label>
      <label htmlFor="number" className={css.formLabel}>
        <span className={css.formLabelHeader}>Number</span>
        <input type="tel" name="number" placeholder='+380...' className={css.formInput} required />
      </label>
      <button type="subbmit" className={css.submitForm}>Add contact</button>
      </form>
    )
  }

