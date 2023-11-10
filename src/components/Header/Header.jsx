import { NavigationLink } from './Header.styled';
import { Box } from 'components/ContactsHeader/ContacsHeader.styled';
export const Header = () => {
  return (
    <Box>
      <NavigationLink to="/register" end>
        Register
      </NavigationLink>
      <NavigationLink to="/login">Log in</NavigationLink>
    </Box>
  );
}