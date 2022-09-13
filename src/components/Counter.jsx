import {Component} from 'react'
class Counter extends Component {
    constructor(){
        super()
        console.log('this is the constructor of counter ')
        this.state ={
            counter: 0
        }
    }
    componentWillUnmount(){
        console.log('counter will unmount now' )
    }
    componentDidUpdate(){
        console.log('counter will update now' )
    }
    componentDidMount(){
        console.log('counter will be mounted now')
    }
    render(){
        console.log('this is the render of counter')
        return (
            <>
            <h2>{this.state.counter}</h2>
            <button 
            onClick={()=>this.setState({counter:this.state.counter+1})}>
                Counter add 1
            </button>
            </>
        )
    }
}
export default Counter