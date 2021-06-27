import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import usePersistedState from './hooks/usePersistedState';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/night';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
      <GlobalStyles />
        <Switch>
          <Route path="/rooms/new" component={ NewRoom } />
          <Route path="/rooms/:id" component={ Room } />
          <Route path="/admin/rooms/:id" component={ AdminRoom } />
          <Route path="/" render={ (props) =>  <Home {...props} toggleTheme={ toggleTheme } /> } />
        </Switch>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
