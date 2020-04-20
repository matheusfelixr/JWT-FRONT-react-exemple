import React, { Component } from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../config/Api'
import {history} from '../../config/History'

export default class Register extends Component {
constructor(props){
  super(props);

  this.state={
    user:"",
    password:"",
  }
}

create = () =>{
  api.post('/user/create', {  
    username:this.state.user,
    password:this.state.password
})
  .then(function (response) {
    console.log(response)
      alert("usuario cadastrado com sucesso");
        history.push('/')

  })
  .catch(function (error) {
    alert("Erro ao cadastrar Usuario");

    console.log(error);
  });
}

handleChange = event =>{
  this.setState({[event.target.name] : event.target.value})
}
  render() {
    document.body.style = 'background: #46a0f5;';
    return (
           <div className="register">
             <div className="container-login">
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
                  <Button variant="primary" onClick={() => this.create() }>Criar</Button>
                </div>
              </Form>

             </div>

           </div>
    );
  }
}
