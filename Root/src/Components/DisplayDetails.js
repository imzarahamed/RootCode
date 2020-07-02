import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Image } from 'react-bootstrap';


export default class DisplayDetails extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
        isloaded:true,
        items:[],
    }
  }

  
  componentDidMount(){
      fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
      .then(res => res.json())
      .then(json => {
            this.setState({
                isloaded:true,
                items:json,
            })
      });
  }

  render(){

    var {isloaded, items} = this.state;

    if(!isloaded){
        return(
            <div>Error...</div>
        );
    }else{
        return(
            <div className="App">
                <div>
                <Button variant="outlined" color="primary">XS</Button>
                </div>
                <ul>
                    {items.map(items => (
                        <li key={items.id}>
                            <p>Item: {items.id}</p>
                            <Image src={items.details.image} rounded /><br/>
                            <p>Name: {items.name}</p>
                            <p>Price: {items.details.price}</p>
                            <p>Size: {items.details.size}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // const Filter=()=>{
        
    // }
  }
}