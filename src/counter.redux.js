
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

const counter = (state = {num: 10},action) => {
    switch (action.type) {
        case INCREASE:
            return {...state,num: state.num + 1}
        case DECREASE: 
            return {...state,num: state.num - 1}
        default:
            return state
    }
}

const add = () => ({type: INCREASE})
const del = () => ({type: DECREASE})
const addAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(add())
    }, 2000);
} 

export {counter,add,del,addAsync}