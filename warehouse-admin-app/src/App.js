import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/auth/Login';
import LogoutButton from './components/auth/Logout'
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Sidebar } from "./components/common/Slidebar";
import { Content } from "./components/common/Content";
import { Footer } from "./components/common/Footer";
import { Warehouse } from "./components/common/Warehouse";
import { Fragment } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Fragment>
      {isAuthenticated ? (        
        <Fragment>
          <Header />
          <Sidebar />
          <Content />
          <Footer />
          </Fragment>

          //wena shorooooooo

      ) : (
        <div className="container">
          <h1>Bienvenido</h1>
          <LoginButton />
        </div>
      )}
        {/* <Header />
        <Sidebar />
        <Content />
        <Footer /> */}
    </Fragment>
  );
}

export default App;
