import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { Input, Forma, Label, Button, ErMessage } from './PhonebookForm.styled';
import { selectContacts } from 'redux/selectors';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});
const formValues = {
  name: '',
  number: '',
};




export const PhonebookForm = () => {
  const dispatch = useDispatch();
const contacts = useSelector(selectContacts);

const isContactExists = (newContact) => {
  return contacts.some(
    (contact) =>
      contact.name.toLowerCase() === newContact.name.toLowerCase().trim() ||
      contact.number === newContact.number
  );
};

  const handleSubmit = (values, { resetForm }) => {
    if (isContactExists(values)) {
      Notify.failure
      ('Contact with the same name or phone number already exists!');
    } else {
      dispatch(addContacts(values));
      Notify.success('Contact created? horraaaaaaaay)');
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErMessage name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErMessage name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  );
};
