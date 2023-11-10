import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { Button, Email, Box } from './ContacsHeader.styled';
export const LoginHeader = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Email>{email}</Email>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};