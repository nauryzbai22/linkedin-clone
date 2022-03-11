import React from 'react';
import './Header.css';
import HeaderOptions from './HeaderOptions'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon  from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';


function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <header className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccount} title="MyNetwork"/>
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions Icon={ChatIcon} title="Chats"/>
        <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions onClick={logoutOfApp} avatar="https://yt3.ggpht.com/a/AATXAJyUuNRSV9_tEOZv0uFKMLJ-QczN1UezT8UkpraS=s900-c-k-c0xffffffff-no-rj-mo" title="Me"/>
      </div>
    </header>
  )
}

export default Header;
