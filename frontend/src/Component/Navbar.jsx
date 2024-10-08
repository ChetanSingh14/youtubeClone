import React from 'react';
import styles from './Navbar.module.css';
import yt from '../assets/yt.png';
import SearchBar from './SearchBar';
import upload from '../assets/upload.svg';
import voice from '../assets/voice.svg';
import notif from '../assets/notif.svg';
import menu from '../assets/3dot.svg';
import profile from '../assets/profile.svg';
import SignInandLogOut from './SignInandAvatar';

export default function Navbar() {
   return (
      <div className={styles.Navbar}>
         <div className={styles.menu_yt}>
            <img src={menu} alt="Menu logo" className={styles.menu} />
            <img
               src={yt}
               alt="Youtube Logo"
               className={styles.yt}
            />
         </div>
         <div className={styles.search}>
            <SearchBar />
            <img src={voice} alt="" className={styles.voice} />
         </div>
         <div className={styles.grp3}>
            <img src={upload} alt="Upload Icon" />
            <img src={notif} alt="Notification Icon" />
            <SignInandLogOut/>
         </div>
      </div>
   );
}
