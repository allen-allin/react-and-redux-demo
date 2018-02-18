import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login,getUser} from './auth.redux'
@connect(
    state => state.auth,
    {login,getUser}
)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{}]
        }
    }
    componentDidMount() {
        this.props.getUser()
    }
    render() {
        return (
            <div>
                <h2>{this.props.user}</h2>
                {this.props.isAuth ? <Redirect to='/main'></Redirect> : null}
                <button onClick={this.props.login}>登录</button>
            </div>
            
        )
    }
}   
export default Login