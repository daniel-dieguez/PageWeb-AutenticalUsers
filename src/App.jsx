import React from 'react'
import Login from './components/Login'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom';
import ViewUsers from './apis/ViewUsers';


export default function App() {
  return (
    
    <div>
        
        <Routes>
          <Route path='/form' element={<Form />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/view-users' element={<ViewUsers/>}></Route>

        </Routes>
    </div>
    
  )
}
