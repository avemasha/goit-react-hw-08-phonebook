import { useDispatch, useSelector } from 'react-redux';

import { List } from './ContactsList.styled';

import { ContactItem } from './ContactItem';

import { selectVisibleContacts } from 'redux/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(state => {
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number={state.number}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );
};
