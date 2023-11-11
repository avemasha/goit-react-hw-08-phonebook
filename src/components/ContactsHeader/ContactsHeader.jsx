import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { Button, Name, Box } from './ContacsHeader.styled';
export const LoginHeader = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Name>{name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};