import logo from './logo.svg';
import './App.css';

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/auth/Login';

import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Sidebar } from "./components/common/Slidebar";
import { Content } from "./components/common/Content";
import { Footer } from "./components/common/Footer";
import { Fragment } from 'react';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Fragment>
    {isAuthenticated ? (
      //   <>
      // <Profile />
      // <LogoutButton />
      //   </>
      <div className='wrapper'>
        <Router basename='/warehouse-admin/app/#/'>
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </Router>
      </div>
    ) : (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <LoginButton />
      </header>
    </div>
    )}
    </Fragment>
  );
}

export default App;
