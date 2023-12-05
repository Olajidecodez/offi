import { Link } from "react-router-dom";
import {auth} from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import './navbar.css';

export const Navbar = () => {
   const [user] = useAuthState(auth);

   const signUserOut = async () =>  {
     await signOut(auth); 
   };

  return (
  <div className="navBar"> 
     <div className="link"> 
      <Link className="home" to="/">Home</Link>
      <Link className="login" to="/login">Login</Link>
     </div>
   
    
    <div className="user"> 
    { user && (
      <>
      <p>{user?.displayName}</p>
      <img src={user?.photoURL || ""} width="100" height="100" />
      <button onClick={signUserOut}> Log Out</button>
      </>
    )}
    </div>
  </div>
  )
}