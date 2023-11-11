import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser, selectIsRefreshing } from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing
  };
};