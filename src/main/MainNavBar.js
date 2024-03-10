import React from 'react'
import Home from './Home'
import {Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Registration from './../student/Registration';
import Contact from './Contact';
import StudentLogin from './../student/StudentLogin';
import './style.css'
import AdminLogin from '../admin/AdminLogin'
import StudentHome from '../student/StudentHome';


export default function MainNavBar() {
  return (
    <div>
        <nav>
        <ul>
            <Link class="active" to="/">Home</Link>
            <Link  to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/studentlogin">Patient Login</Link>
            <Link to="/adminLogin">Admin Login</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/studenthome">Student Home</Link> */}

        </ul>
        </nav>




        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/studentlogin" element={<StudentLogin/>} exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/studenthome' element={<StudentHome/>} exact/>
        </Routes>
    </div>
  )
}
