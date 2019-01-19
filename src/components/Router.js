import React ,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminPanel from './AdminPanel';
import App from './App';
import PageNotFound from './PageNotFound';
import {Provider} from 'react-redux';
import store from '../Store.js/store';

export default class Router extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path = "/admin" component = {AdminPanel}/>
                            <Route component = {PageNotFound} />
                        </Switch>
                </BrowserRouter>
            </Provider>
       )
    }
}