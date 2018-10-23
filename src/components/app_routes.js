import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home';

export default props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/lobby" component={Lobby}/>
            <Route exact path="/room/create" component={CreateRoom}/>
            <Route path="/room/:room_id" component={Chat}/>
        </Switch>
    )
}
