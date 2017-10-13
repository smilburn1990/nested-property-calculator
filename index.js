import './styles/_main.scss'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import NestedCalculator from './containers/NestedCalculator'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={NestedCalculator}/>
		</Router>
	</Provider>
, document.querySelector('.main'))