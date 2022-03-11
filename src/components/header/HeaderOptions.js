import React from 'react';
import './HeaderOptions.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOptions({Icon, title, avatar, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon"/>}
      {avatar && <Avatar className="headerOptions__icon">{user?.displayName[0].toUpperCase()}</Avatar>}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
