import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GET_USER = 'GET_USER'
const auth = (state = {isAuth: false,user: '000'},action) => {
    switch (action.type) {
        case LOGIN:
            return {...state,isAuth: true}
        case LOGOUT:
            return {...state,isAuth: false}
        case GET_USER:
            return {...state,isAuth: false,user: action.json[0].name + 'hahaha'}
        default:
            return state
    }
}

const login = () => ({type: LOGIN})
const logout = () => ({type: LOGOUT})
const getUser = () => 
    async dispatch => {
        const res = await axios.get('./data')
        if(res.status === 200) {
            dispatch({
                type: 'GET_USER',
                json: res.data
            })
        }
}
export {auth,login,logout,getUser}