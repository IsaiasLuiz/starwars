import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/Main'
import Character from './pages/ characters/Character'

const routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/character/:id" component={Character}/>
      <Route path="/"/>
    </Switch>
  </BrowserRouter>
);

export default routes;