import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory(); 
// we are using createBrowserHistory to enable HTML5 History API in order to make URLs look pretty. 
//For example, it navigates to http://localhost:3000/add instead of http://localhost:3000/#add

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));