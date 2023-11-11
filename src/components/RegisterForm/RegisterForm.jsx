import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  Input,
  Forma,
  Label,
  Button,
  ErMessage,
  Title,
} from '../PhonebookForm/PhonebookForm.styled';
import { register } from 'redux/authOperations';

const formValues = {
    name: '',
    email: '',
    password: '',
  };

  export const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    };

    return (
        <Formik initialValues={formValues} onSubmit={handleSubmit}>
          <Forma autoComplete="off">
            <Title>Register{' '}<span role="img" aria-label="Register icon">
            👋
          </span></Title>
            <Label htmlFor="name">
              Username
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
               <ErMessage name="name" component="p" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="text" name="email" required />
          <ErMessage name="email" component="p" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErMessage name="password" component="p" />
        </Label>
        <Button type="submit">Register</Button>
      </Forma>
    </Formik>
  );
};