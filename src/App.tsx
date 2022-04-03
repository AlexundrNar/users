import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './pages/UsersList';
import UserItemPage from './pages/UserItemPage';
import './styles/App.scss'

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='pages'>
          <Routes>
            <Route path={'/'} element={<UsersList/>} />
            <Route path={'/userDetail/:id'} element={<UserItemPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
