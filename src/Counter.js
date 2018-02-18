import React,{Component} from 'react'
import { connect } from "react-redux";
import {add,del,addAsync} from './counter.redux'
//修饰器写法

@connect(
    state => state.counter,
    {add,del,addAsync}
)
class Counter extends Component {

    render() {
        let {num,add,del,addAsync} = this.props
        return (
            <div>
                <h2>{num}</h2>
                <button onClick={add}>+</button>
                <button onClick={del}>-</button>
                <button onClick={addAsync}>延迟+</button>
            </div>
        )
    }
}

export default Counter

 
//正常写法

/**
class Counter extends Component {

    render() {
        let {num,add,del,addAsync} = this.props
        return (
            <div>
                <h2>{num}</h2>
                <button onClick={add}>+</button>
                <button onClick={del}>-</button>
                <button onClick={addAsync}>延迟+</button>
            </div>
        )
    }
}
export default connect(    
    state => state.counter,
    //mapDispatch可以是一个函数，也可以是一个对象，如下的函数可以简写为对象 {add,del,addAsync}
    dispatch => ({
        add: () => dispatch(add()),
        del: () => dispatch(del()),
        addAsync: () => dispatch(addAsync())
    })
)(Counter)
*/