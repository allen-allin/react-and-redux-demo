import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'


import Auth from './Auth'
import Dashboard from './DashBoard'

const emptyFn = () => {}
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension() || emptyFn()
))


ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
)
