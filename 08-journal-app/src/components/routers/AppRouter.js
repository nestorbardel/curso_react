import React from 'react'
import {  BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from './../journal/JournalScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={JournalScreen}/>
                    <Route path='/auth' component={AuthRouter}/>
                    <Redirect to='/auth/login'/>

                </Switch>
            </div>
        </Router>
    )
}
