import React, { useEffect, Suspense } from 'react';
import Container from './Container';
import Header from './Header';
import HomeView from 'Views/HomeView';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'modern-normalize/modern-normalize.css';
import '../styles/base.scss';
import CustomLoader from './SpinnerLoader/SpinnerLoader';
import ListView from 'Views/ListView';
import NewTodoView from 'Views/NewTodoView';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={CustomLoader}>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route exact path="/list">
              <ListView />
            </Route>
            <Route exact path="/newtodo">
              <NewTodoView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
