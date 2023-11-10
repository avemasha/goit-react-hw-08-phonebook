import { Formik } from 'formik';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

import {
  Input,
  Forma,
  Label,
  Button,
  ErMessage,
  Title,
} from '../PhonebookForm/PhonebookForm.styled';

const formValues = {
    email: '',
    password: '',
  };

  export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
      dispatch(
        logIn({
          email: values.email.trim(),
          password: values.password.trim(),
        })
      );
      resetForm();
    };
    return (
        <Formik initialValues={formValues} onSubmit={handleSubmit}>
          <Forma autoComplete="off">
            <Title>Log in</Title>
            <Label htmlFor="email">
              Email
              <Input type="email" name="email" required />
              <ErMessage name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              Password
              <Input
                type="password"
                name="password"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErMessage name="password" component="p" />
            </Label>
            <Button type="submit">Log in</Button>
          </Forma>
        </Formik>
      );
    };