import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = (props) => {

  const { logout } = useAuth0();

  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);


  const cssMousePointer = {
    cursor: "pointer",
  };

  function toggleStyle() {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add('dark-mode');
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove('dark-mode');
      setChecked(false);
    }
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="/#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/#" className="nav-link">
            Home
          </a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Dark Theme */}
        <div>
          <li className="nav-item d-flex align-items-center">
            <div className="mr-3">
              <input type="checkbox" defaultChecked={checked} className="checkbox mb-0" id="chk" onChange={() => toggleStyle()} />
              <label className="label mb-0" htmlFor="chk">
                <i className="fas fa-moon f-12" />
                <i className="fas fa-sun f-12" />
                <div className="ball" />
              </label>
            </div>
          </li>
        </div>
        <div>
          <li className="nav-item dropdown">
            <button className="btn btn-sm btn-danger f-12 font-weight-bold" style={cssMousePointer} onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};



// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.checked = false;
//   }

//   dispatch = useDispatch();
//   user = useSelector((store) => store.users.me);
//   logoutUrl = useSelector((store) => store.users.logoutUrl);


//   if (user.load !== undefined) {
//     dispatch(me());
//     dispatch(getLogoutUrl());
//   }

//   function toggleStyle() {
// 		setChecked(!checked)
// 		if (checked === true) {
// 			//this.renderer.addClass(this.document.body, 'dark-mode');
// 			document.body.classList.add('dark-mode');
// 			localStorage.setItem('dark-mode', String(checked));
// 		} else {
// 			//this.renderer.removeClass(this.document.body, 'dark-mode');
// 			document.body.classList.remove('dark-mode');
// 			localStorage.setItem('dark-mode', String(checked));
//     }
// 	}

//   componentDidMount() {
//     localStorage.getItem("theme") === "dark-mode" ? true : false
//   }

//   componentWillUnmount() {
//   }

//   render() {
//     return (
//       <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//       {/* Left navbar links */}
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" data-widget="pushmenu" href="#" role="button">
//             <i className="fas fa-bars" />
//           </a>
//         </li>
//         <li className="nav-item d-none d-sm-inline-block">
//           <a href="#/" className="nav-link">
//             Home
//           </a>
//         </li>
//       </ul>

//       {/* Dark Theme */}
//       <li className="navbar-nav ml-auto nav-item d-flex align-items-center">
//         <div className="mr-3">
//           <input type="checkbox" className="checkbox mb-0" id="chk" onChange={toggleStyle} />
//           <label className="label mb-0" htmlFor="chk">
//             <i className="fas fa-moon f-12" />
//             <i className="fas fa-sun f-12" />
//             <div className="ball" />
//           </label>
//         </div>
//       </li>

//     <div className="mb-4">
//       <input type="checkbox" defaultValue={1} className="mr-1" />
//       <span>Dark Mode</span>
//     </div>

//       {/* Right navbar links */}
//       <ul className="navbar-nav ml-auto">
//         {/* Messages Dropdown Menu */}
//         <li className="nav-item dropdown">
//           <a className="nav-link" data-toggle="dropdown" href={logoutUrl}>
//             <i className="far fa-comments" />
//             <span className="badge badge-danger navbar-badge" >Logout</span>
//           </a>
//         </li>

//       </ul>
//     </nav>
//     );
//   }
// }

Header.displayName = "Header";
Header.propTypes = {
  page: PropTypes.string,
};