import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Image } from 'react-bootstrap';

function App() {
  
  const [sizes, setSizes] = useState(null);
  // const [details, setDetails] = useState(null);
  const APIURL = 'https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments';
  
  fetchDetails();
  const fetchData = async () => {
    const responce = await axios.get(APIURL)

    setSizes(responce.data)
  }

  function fetchDetails(){
    fetch(APIURL)
    .then(resp => resp.json())
    .then(data =>setSizes(data))
    // .then(data =>setDetails(data))
  }


  return (
    <div className="sizes">
      <h1 style={{marginLeft:10}}>Size :</h1>
      <Button variant="outlined" color="primary">XS</Button>
      <Button variant="outlined" color="primary">S</Button><br/>
      <Button variant="outlined" color="primary">M</Button>
      <Button variant="outlined" color="primary">ML</Button><br/>
      <Button variant="outlined" color="primary">L</Button>
      <Button variant="outlined" color="primary">XL</Button><br/>
      <Button variant="outlined" color="primary">XXL</Button>

      <h1 style={{marginLeft:10}}>FilterBy</h1>
      <select id = "dropdown">
          <option value="Type">Type</option>
          <option value="All">All</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Dress Shirt">Dress Shirt</option>
      </select><br/><br/><br/><br/>

      {sizes &&
        sizes.map((size, index) => {
          const sizevalue = size.details.size;
          const name = size.name;
          const id = size.id;
          const price = size.details.price;
          const image = size.details.image;
              return (
                <div className="size" key={index}>
                  <p>Product :{id}</p><br/>
                  <Image src={image} rounded /><br/>
                  {name}<br/>
                  {sizevalue}<br/>
                  {price}<br/>
                </div>
              ); 
        })}
    </div>
  );
}

export default App;
