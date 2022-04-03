import React, { FC } from 'react';
import { IUser } from '../types/types';
import '../styles/UsersList.scss'

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div className='userItem'>
      <p> <span>ФИО:</span> {user.name}</p> 
      <p> <span>город:</span> {user.address.city}</p> 
      <p> <span>компания:</span> {user.company.name}</p> 
      <button onClick={() => onClick(user)}>Подробнее</button>
    </div>
  );
}

export default UserItem;