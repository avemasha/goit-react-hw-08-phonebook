import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { LoginHeader } from 'components/ContactsHeader/ContactsHeader';
import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

export const Layout = () => {
  const user = useSelector(getUser);
  console.log(user.email);
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      {isLoggedIn ? <LoginHeader email={user.email} /> : <Header />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};