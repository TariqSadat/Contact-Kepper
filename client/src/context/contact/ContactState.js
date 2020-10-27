import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props =>{
  const initialState = {
    contacts: [
      {
        id:1,
        name: 'A',
        email: 'A@email.com',
        phone: '1111111',
        type: 'personal'
      },
      {
        id:2,
        name: 'Sara',
        email: 'Sara@email.com',
        phone: '121121212',
        type: 'personal'
      },
      {
        id:3,
        name: 'White',
        email: 'White@email.com',
        phone: '8801111',
        type: 'professional'
      }
    ],
    current : null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD_CONTACT

  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, contact });
  }


  // DELETE_CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }

  // SET_CURRENT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  }

  // CLEAR_CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT});
  }

  // UPDATE_CONTACT


  // FILTER_CONTACTS


  // CLEAR_FILTER

  return (
    <ContactContext.Provider value={{ 
      contacts: state.contacts,
      current: state.current,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent
     }}>
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;