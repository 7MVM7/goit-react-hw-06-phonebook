// import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from "uuid";
// // import PropTypes from "prop-types";
// import { MyForm } from "./ContactsForm.styled";
// import { addContact } from "../../redux/actions";




// export default function ContactsForm({ onSubmit }) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const contacts = useSelector(state => state.contacts);
//   const dispatch = useDispatch ();
  
//   const  handleChange  = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {

//     e.preventDefault(); 

// //   const findContact = contacts.find(
// //     contact => contact.name.toLowerCase() === name.toLowerCase(),
// //     );
    
// //     if (findContact) {
// //       alert(`${name} is already in contacts`);
// //       return;
// //     } else {
// //       dispatch(addContact({ 
// //         id: uuidv4(),
// //         name,
// //         number,
// //       }));
// //     setName('');
// //     setNumber('');
// //   }
  
//  };

//   const submitContact = ({ name, number }) => {
//     const addContact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//   //   contacts.find(
//   //     (contact) => contact.name.toLowerCase() === addContact.name.toLowerCase()
//   //   )
//   //     ? alert(`${name} is already in contacts`)
//   //     : setContacts((prevContacts) => [addContact, ...prevContacts]);
//   // };

//   const deleteContact = (id) => {
//     setContacts((prev) => prev.filter((contact) => contact.id !== id));
//   };




//   dispatch(addContact(addNewContact));
//   // const submit = (e) => {
//   //   e.preventDefault();
//   //   // onHandleSubmit({ name, number });
//     reset();
//   };
//   const reset = () => {
//     setName("");
//     setNumber("");
//   };
//   return (
//     <MyForm onSubmit={submit}>
//       <label>
//         Name
//         <input
//           onChange={change}
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Enter your name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//         Number
//       </label>
//       <input
//         onChange={change}
//         placeholder="Enter your phone number"
//         type="tel"
//         name="number"
//         value={number}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//         required
//       />
//       <button type="submit">Add contact</button>
//     </MyForm>
//   );
// }

// // ContactsForm.propTypes = {
// //   onHandleSubmit: PropTypes.func.isRequired,
// // };
import PropTypes from 'prop-types';
import { MyForm } from "./ContactsForm.styled";
import { useState } from 'react';
import shortid from 'shortid';
import { addContact } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();

 
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

 
  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`Sorry, but ${name} is already in contacs.`);
      return;
    }

 
    const addNewContact = {

      name,
      number,
      id: shortid.generate(),
    };

    dispatch(addContact(addNewContact));
   
    reset();
  };

  
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <MyForm onSubmit={handleSubmit}>
            <label>
             
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
         Number
           </label>

      
       
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
    
    <button type="submit">Add contact</button>
    </MyForm>
  );
}

ContactsForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};


export default ContactsForm;

