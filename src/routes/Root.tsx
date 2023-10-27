import React from 'react';
import { Outlet } from "react-router-dom";

import { Container } from '@mui/system';

import MainNavbar from './../components/MainNavbar/MainNavbar';

function Root() {
  return (
    <Container>
      <MainNavbar />
      <Outlet />
    </Container>
  );
}

export default Root;
