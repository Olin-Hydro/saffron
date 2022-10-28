import React, { useState } from 'react';

import { Container } from '@mui/system';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Home from './pages/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <MainNavbar></MainNavbar>
      <Home></Home>
    </Container>
  );
}

export default App;
