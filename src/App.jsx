import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Account from './Account'
import Home from './Home'


export default function App() {
  return <>
    {/* <Home /> */}
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </>
}
