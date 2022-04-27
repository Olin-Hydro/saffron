import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid className='MainBackground'>
      <Container className='MainContent'> 
      <MainNavbar></MainNavbar>
      <Home></Home>
      </Container>
    </Container>
  );
}

export default App;
