import React,{Component} from 'react'
import {connect} from 'react-redux'
import {counter,add,del,addAsync} from './index.redux'
@connect(
	state => ({num: state.counter}),
	{add,del,addAsync}
)
class App extends Component {
	render() {
		const {num,add,del,addAsync}  = this.props
		return (
			<div>
				<h1>{num}</h1>
				<button onClick={add}>+</button>			
				<button onClick={del}>-</button>
				<button onClick={addAsync}>延迟+</button>
			</div>
		)
	}
}
export default App