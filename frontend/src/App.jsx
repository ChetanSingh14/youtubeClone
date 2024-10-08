import React from 'react';
import SideBar from './component/SideBar'
import Filter from './Component/Filter';
import { Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp';

export default function App() {
  return (
    <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/auth' element={<SignUp/>}></Route>
      </Routes>
      <Filter/>
    </div>
  )
}

