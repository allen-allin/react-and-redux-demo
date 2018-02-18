import React, { Component } from 'react';
import {Switch,Route,Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './auth.redux'
import Counter from './Counter'

const View1 = () => <h2>VIEW1</h2>
const View2 = () => <h2>VIEW3</h2>

@connect(
    state => state.auth,
    {logout}
)
class Main extends Component {
    render() {
        const main = (
            <div>
               <ul>
                   <li>
                       <Link to='/main'>counter</Link>
                   </li>
                   <li>
                       <Link to='/main/view1'>view1</Link>
                   </li>
                   <li>
                       <Link to='/main/view2'>view2</Link>
                   </li>
               </ul> 
               <button onClick={this.props.logout}>注销</button>
               <Switch>
                   <Route path='/main' exact component={Counter}></Route>
                   <Route path='/main/view1' component={View1}></Route>
                   <Route path='/main/view2' component={View2}></Route>
               </Switch>
            </div>
        )
        const redirect = <Redirect to='/login'></Redirect>
        return this.props.isAuth ? main : redirect
    }
}

export default Main