import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Style from "./SignInandAvatar.module.css";
import {useNavigate} from 'react-router-dom';
import avatar from '../assets/people.png'
import GoogleIcon from "@mui/icons-material/Google";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LogoutIcon from "@mui/icons-material/Logout";
//This Component is called in Navbar.jsx
export default function SignInandLogOut({SignedIn = true}) {
  const nav = useNavigate();
  return (
    <div className={Style.ButtonParentContainer}>
      {SignedIn ? (
        <div className={Style.AvatarContainer}>
          <img src={avatar} alt="Avatar" className={Style.Avatar} />
          <div className={Style.AvatarMenu}>
            <div className={Style.UserDesc}>
              <img src={avatar} alt="Avatar" className={Style.Avatar} />
              <div className={Style.UserDescText}>
                Hi
                Arihant
              </div>
            </div>
            <ul>
              <li><GoogleIcon/> Google Account</li>
              <li><SwitchAccountIcon/> Switch Accounts</li>
              <li><LogoutIcon/> Sign Out</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={Style.buttonContainer}>
          <button
            className={Style.SignInButton}
            onClick={() => {
              nav("/auth");
            }}
          >
            <AccountCircleIcon fontSize="small" />
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
