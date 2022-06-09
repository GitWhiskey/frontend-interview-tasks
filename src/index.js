import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DeviceStatus from './tasks/device-status';
import { Box, createTheme, CssBaseline, Drawer, List, ThemeProvider, } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FavoriteMovies from "./tasks/favorite-movies";
import ListItemLink from "./components/LinkItemList";

const mdTheme = createTheme();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={mdTheme}>
              <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <Drawer
                    variant="permanent">
                      <List>
                          <ListItemLink to="/device-status">Device status</ListItemLink>
                          <ListItemLink to="/favorite-movies">Favorite movies</ListItemLink>
                      </List>
                  </Drawer>
                  <Switch>
                      <Route path="/device-status">
                          <DeviceStatus deviceId="test-device-1" />
                      </Route>
                      <Route path="/favorite-movies">
                          <FavoriteMovies />
                      </Route>
                      <Route path="/">
                      </Route>
                  </Switch>
              </Box>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

