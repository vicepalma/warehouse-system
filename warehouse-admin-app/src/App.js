import logo from './logo.svg';
import './App.css';

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/auth/Login';
import LogoutButton from './components/auth/Logout';

import Profile from './components/profile/Profile';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { isAuthenticated ? (
          <>
        <Profile />
        <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
