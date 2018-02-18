import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {auth,login,logout} from './Auth.redux'


@connect(
    state => state.auth,
    {login}
)
class Auth extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                <h2>没有权限</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
export default Auth