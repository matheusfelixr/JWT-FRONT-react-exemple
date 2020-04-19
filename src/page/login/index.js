import React, { Component } from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../config/Api'
import {history} from '../../config/History'

export default class Login extends Component {
constructor(props){
  super(props);

  this.state={
    user:"",
    password:"",
    isLogged:false,
    isUnauthenticated:false,
    isAuthenticated:false
  }
}

authenticateProduct = () =>{
  api.post('/authenticate', {  
    username:this.state.user,
    password:this.state.password
})
  .then(function (response) {
    console.log(response)
    if(response.data.token){
        localStorage.setItem('user',response.data.token)
        history.push('/authenticated')
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

handleChange = event =>{
  this.setState({[event.target.name] : event.target.value})
}
  render() {
    document.body.style = 'background: #46a0f5;';
    return (
           <div className="login">
             <div className="container-login">
              <h1> { this.state.user}</h1>
              <h1> { this.state.password}</h1>
             <Form>
                <Form.Group controlId="formBasicUser">
                  <Form.Label>Usuário</Form.Label>
                  <Form.Control required type="text" placeholder="Usuário" name="user" onChange={this.handleChange} value={this.state.user}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" name="password" onChange={this.handleChange} value={this.state.password}/>
                </Form.Group>
                <div className="container-buton">
                  <Button variant="primary" onClick={() => this.authenticateProduct() }>Entrar</Button>
                </div>
                <div className="container-buton-redirect">
                 <Button variant="danger" onClick={() => this.setState({isAuthenticated: true}) }>Ir para pagina com autenticação</Button>
                </div>
                <div className="container-buton-redirect">
                  <Button variant="danger" onClick={() =>  this.setState({isUnauthenticated: true}) }>Ir para pagina sem autenticação</Button>
                </div>
                {this.state.isLogged && history.push('/authenticated')}
                {this.state.isAuthenticated && history.push('/authenticated')}
                {this.state.isUnauthenticated && history.push('/unauthenticated')}
              </Form>

             </div>

           </div>
    );
  }
}
