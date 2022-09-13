import React from 'react'
import Product from './components/Product';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:[],
      allCategories :[]
    }
  }
  componentDidMount(){
    const URL ="https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json"

    fetch(URL)
    .then(res=> res.json())
    .then(data=>{
      const allCategories = [];
      for(let i= 0 ; i < data.length ; i++){
        if(!allCategories.includes(data[i].category)){
          allCategories.push(data[i].category)
        }
      }
      this.setState({products: [...data],allCategories:allCategories})

    })
    .catch(err=> this.handleError(err, err.message))
  }
  render() {
    return (
      <>
      <h2>these are my products</h2>
      {
        this.state.allCategories.map(category => <button>{category}</button>)
      }
       {
        this.state.products.map(product =><Product key={product.id} data={product}/>)

       }
      </>
    )
  }
}

export default App