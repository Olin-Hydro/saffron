import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import MainNavbar from './components/MainNavbar/MainNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid className='MainBackground'>
      <Container className='MainContent'> 
      <MainNavbar></MainNavbar>
      </Container>
    </Container>
  );
}

export default App;
