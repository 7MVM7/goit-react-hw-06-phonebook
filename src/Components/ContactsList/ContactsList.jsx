import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MyList } from "./ContactsList.styled";
import { deleteContact } from '../../redux/actions';
import { onFilteredContacts } from '../../redux/seloctors';

function ContactsList () {
  const contacts = useSelector(onFilteredContacts);

  const dispatch = useDispatch();
  return (
    <MyList>
      {contacts.map(({ name, number, id }) => (
        <li className="contact" key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className="buttonDelete"
            type="button"
            onClick={() => dispatch (deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </MyList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactsList;
