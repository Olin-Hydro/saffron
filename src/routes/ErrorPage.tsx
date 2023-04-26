import React from 'react'
import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import { Icon } from '@iconify/react';
import { ArrowBack } from '@mui/icons-material';

export default function ErrorPage() {
  const getErrorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else {
      console.error(error)
      return 'Unknown error'
    }
  }

  const error = useRouteError();
  const errorMessage = getErrorMessage(error);
  console.error(error);
  console.error(errorMessage);

  let navigate = useNavigate();

  return (
    <Stack
      direction="column"
      spacing={5}
      alignItems="center"
      justifyContent="center"
      mt={20}
      id="error-page">
      <Item>
        <Icon icon="fa6-solid:plant-wilt" height="100" color="white" />
      </Item>
      <Item>
        <Typography
          variant="h1"
          color="text.white"
        >Oops!</Typography>
      </Item>
      <Item>
        <Typography
          variant="h4"
          color="text.white"
        >{errorMessage}</Typography>
      </Item>
      <Item>
        <Button
          sx={{ color: "#FFF" }}
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Item>
    </Stack >
  );
}