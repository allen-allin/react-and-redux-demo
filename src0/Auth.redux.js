const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const auth = (state={isAuth: false,user: 'zys'},action) => {
    switch (action.type) {
        case LOGIN:
            return {...state,isAuth: true}
            break;
        case LOGOUT:
            return {...state,isAuth: false}
            break;
        default:
            return state
            break;
    }
}

const login = () => ({
    type: LOGIN
})
const logout = () => ({
    type: LOGOUT
})

export {auth,login,logout}