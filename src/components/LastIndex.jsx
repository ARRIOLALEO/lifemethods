import {Component} from 'react'
import Counter from './components/Counter';
import './App.css';

class App extends Component {

  constructor(){// number 1
    super();
    console.log('---this is the constructor---')
    this.state = {
      showCounter: false,
      password: '',
      data:{}
    }
  }


  componentDidUpdate(){// this happens after update the state
    console.log('---this is the componentDidUpdate---')
  }

  componentDidMount(){// this is the third one  one one time
    // in this part is where you should call an API
    console.log("----the Component has been Created----");
  }

  render(){//this is the second one
    console.log("------the Component has been rendered----");
    return(
      <>
      <h2>React Life CM</h2>
      <button onClick={()=>this.setState({showCounter:!this.state.showCounter})}>Show The Counter</button>
      {
        this.state.showCounter && <Counter/>
      }
      </>
    )
  }
}

export default App;
