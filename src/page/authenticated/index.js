import React, { Component } from 'react';
import api from '../../config/Api'
import Button from 'react-bootstrap/Button';


export default class Authenticated extends Component {
    constructor(props){
      super(props);
      this.state={
        res:"Não fez Requisição"
      }
    }


  findAuthenticated = async () =>{
        try {
           let user = localStorage.getItem('user');
          console.log(user)
          let  token = user
          console.log(token)
          let config = {
          headers: { 'Authorization':"jwt " + token, 'Access-Control-Allow-Origin': '*'}
          };
          console.log(config)



            const response = await api.get(`/authenticated-route`, {}, config);
             this.setState({res: response.data })
          } catch (error) {
            this.setState({res: "Erro ao fazer requisição"})
            console.log(error);
          }
      }

  render() {
    document.body.style = 'background: white;';
    return (
            <div className="authenticated">
                <h1>{this.state.res}</h1>
                <Button variant="primary" onClick={() => this.findAuthenticated() }>Requisição</Button>
            </div>
    
    );
  }
}
