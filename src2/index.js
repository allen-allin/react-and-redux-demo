import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { createStore ,applyMiddleware,compose} from "redux";
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './reducer'
import 'antd-mobile/dist/antd-mobile.css'
import './config'


const emptyFn = () => {}
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : emptyFn()
))
ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>

            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
)

