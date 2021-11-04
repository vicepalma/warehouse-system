import React, { Fragment } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import avatar from '../../assets/avatar5.png'
import { Link } from "react-router-dom";

const Profile = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    // isAuthenticated && (
    //   <Fragment >
    //     <div>
    //       <img src={user.picture} alt={user.name} />
    //       <h2>{user.name}</h2>
    //       <p>{user.email}</p>
    //     </div>
    //     <nav>
    //       <Link to="/">Home</Link>
    //     </nav>
    //   </Fragment >
    // )

    <Fragment >
    <div>
      <img src={avatar} alt='avatar' />
      <h2>Jhon Doe</h2>
      <p>Something here...</p>
    </div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </Fragment >
  );
};

export default Profile;