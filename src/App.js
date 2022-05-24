import React, { useState } from 'react';

// import Container from 'react-bootstrap/Container';
import { Container } from '@mui/system';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Home from './pages/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    // <Container fluid className='MainBackground'>
    //   <Container className='MainContent'> 
    //     
    //   </Container>
    // </Container>
    <Container>
      <MainNavbar></MainNavbar>
      <Home></Home>
    </Container>
  );
}

export default App;
