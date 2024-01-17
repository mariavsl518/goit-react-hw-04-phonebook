// import React, { Component } from 'react';
import css from './ContactForm.module.css';

export const ContactForm=({addProfile})=> {

  const handleSubmit=(evt)=>{

    evt.preventDefault();

    const name= evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
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

