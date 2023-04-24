import * as React from 'react';
import { Box, Button, Grid, IconButton, Toolbar, Tooltip } from '@mui/material';

// import icons as components
import { ReactComponent as LogoMonoWhite } from "../../icons/global/logo-mono-white.svg";
import { ReactComponent as HelpIcon } from "../../icons/navbar/help.svg";
import { ReactComponent as GithubIcon } from "../../icons/navbar/github.svg";
import { ReactComponent as SettingsIcon } from "../../icons/navbar/settings.svg";

function MainNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box maxWidth="lg" padding={10}>
      <Toolbar disableGutters>
        <Grid container maxWidth="xl" alignItems="center">
          <Grid item xs={3}>
            <LogoMonoWhite>
            </LogoMonoWhite>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexGrow: 1 }}
              display='flex'
              justifyContent='center'>
              {/* <Link to={'dashboard'}>Dashboard</Link> */}
              <Button
                href="dashboard"
                sx={{ color: 'white', display: 'block' }}
              >Dashboard</Button>
            </Box>
          </Grid>
          <Grid
            xs={3}
            item
            container
            justifyContent="flex-end"
            alignItems="center"
            spacing={8}
          >
            <Grid item>
              <Tooltip title="Help" arrow>
                <IconButton aria-label="help">
                  <HelpIcon>
                  </HelpIcon>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Github" arrow>
                <IconButton aria-label="github">
                  <GithubIcon>
                  </GithubIcon>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Settings" arrow>
                <IconButton aria-label="settings">
                  <SettingsIcon>
                  </SettingsIcon>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}
export default MainNavbar;
