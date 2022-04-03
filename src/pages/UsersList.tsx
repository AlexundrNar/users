import React, { FC, useEffect, useState } from 'react';
import List from '../components/List';
import { IUser } from '../types/types';
import UserItem from '../components/UserItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/UsersList.scss'
import '../styles/SortItem.scss'


const UserList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
      setLoading(true)
    } catch (e) {
      alert(e)
    }
  }

  const sortNameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    users.sort((prev, next) => {return prev.name > next.name ? 1 : -1})
    setUsers([...users])
  }

  const sortCityHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    users.sort((prev, next) => {return prev.address.city > next.address.city ? 1 : -1})
    setUsers([...users])
  }

  return (
    <div>
      <div className='sort'>
      <p>Сортировка</p>
      <button onClick={sortNameHandler}>По имени</button>
      <button onClick={sortCityHandler}>По городу</button>
      </div> 

      <div className='users'>
        <h1>Список пользователей</h1>
        
        <div>
          {loading ? 
          <List
            items={users}
            renderItem={(user: IUser) =>
              <UserItem
              onClick={(user) => navigate('/userDetail/' + user.id)}
              user={user}
              key={user.id}
            />}
          /> :
          <img src="/images/UserLoading.gif" alt="" />}
        </div>

        <p>Найдено {users.length} пользователей</p>
      </div>
    </div>
  );
}

export default UserList;