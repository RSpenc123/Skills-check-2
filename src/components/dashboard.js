import React, {Component} from 'react'
import axios from 'axios'
import Product from './product';


class dashboard extends Component{
    constructor(){
        super();
        this.state={
           item: [],
           name: '',
           price: '',
           img: '',
            }
        
    }
componentDidMount = () => {
    axios.get('/api/item').then(res =>{
        const item = res.data
        this.setState({
            item
        })
    })
    .catch(err =>console.log('oof', err))
}
    render(){console.log(this.state.item)
        
            
        return(
            <div>
            <Product item={this.state.item}/>
            </div>
        )
    }
}

export default dashboard;