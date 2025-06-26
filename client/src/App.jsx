import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Project from './pages/Projects.jsx';
import Header from './components/Header.jsx';
export default function App() {
  return (
    <div className='text-3xl'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/projects' element={<Project/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
