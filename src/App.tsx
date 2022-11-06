import React, { useState } from 'react';

import { Container } from '@mui/system';

import MainNavbar from './components/MainNavbar/MainNavbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Container>
      <p>hello world</p>
      <MainNavbar></MainNavbar>
      <Home></Home>
    </Container>
  );
}

export default App;
