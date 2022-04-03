import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams } from 'react-router-dom';
import SortItem from '../components/SortItem';
import axios from 'axios';
import '../styles/UserItemPage.scss'
import '../styles/SortItem.scss'

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser>()
  const params : any = useParams()
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsValid(true)
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(document.getElementById("forma") as HTMLFormElement);
    data.forEach(file => console.log(JSON.stringify(file, null, 2)))
  }

  return (
    <div className='UserItemPage'>
      <SortItem />
      <h1>Профиль пользователя</h1>
      
      <div className='btnEdit'>
        <button onClick={editHandler}>Изменить</button>
      </div>

      <form id='forma' className='UserDetails' onSubmit={handleSubmit}>
        <label htmlFor='userInfo'>Name</label>
        <input id='userInfo' name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.name} />
        <label htmlFor='userInfo'>User name</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.username} /> 
        <label htmlFor='userInfo'>E-mail</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.email} /> 
        <label htmlFor='userInfo'>Street</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.address.street} />
        <label htmlFor='userInfo'>City</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.address.city} />
        <label htmlFor='userInfo'>Zip code</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.address.zipcode} />
        <label htmlFor='userInfo'>Phone</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.phone} />
        <label htmlFor='userInfo'>Website</label>
        <input name='userInfo' type="text" required readOnly={!isValid} defaultValue={user?.website} />
        <label htmlFor='userInfo'>Comment</label>
        <textarea name='userInfo' readOnly={!isValid}></textarea>
        <button type="submit" disabled={!isValid} value="Отправить">Отправить</button>
      </form>              
    </div>
  );
}

export default UserItemPage;