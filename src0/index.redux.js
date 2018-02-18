const INCREASE = 'increase'
const DECREASE = 'decrease'
const counter = (state = 0,action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1
            break;
        case DECREASE: 
            return state - 1
            break;
        default:
            return 10
            break;
    }
}
const add = () => ({
    type: INCREASE
})
const del = () => ({
    type: DECREASE
})
const addAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(add())
    }, 2000);
}
export {counter,add,del,addAsync}