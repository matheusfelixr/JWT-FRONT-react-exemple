import React, { Component } from 'react';
import api from '../../config/Api'
import Button from 'react-bootstrap/Button';

export default class Unauthenticated extends Component {
    constructor(props){
      super(props);
      this.state={
        res:"Não fez Requisição"
      }
    }


  findUnauthenticated = async () =>{
        try {
            const response = await api.get(`/unauthenticated-route`);
             this.setState({res: response.data })
          } catch (error) {
            console.log(error);
          }
          
      }

  render() {
    document.body.style = 'background: white;';
    return (
            <div className="unauthenticated">
               <h1>{this.state.res}</h1>
               <Button variant="primary" onClick={() => this.findUnauthenticated() }>Requisição</Button>
           
            </div>
    
    );
  }
}
