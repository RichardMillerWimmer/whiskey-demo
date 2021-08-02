import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Story from './views/Story';
import Cocktail from './views/Cocktail';
import Landing from './views/Landing';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/story' component={Story} />
        <Route path='/cocktails' component={Cocktail} />
    </Switch>
)