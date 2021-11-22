import React from "react";
import {Button, TextField, Box} from '@mui/material'

export default class UsuarioForm extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            nome: this.props.nome || "",
            senha: this.props.senha || "",
            idade: this.props.idade || ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let usuario = {
            nome: this.state.nome,
            senha: this.state.senha,
            idade: this.state.idade
        }
        console.log(usuario)
        this.props.action(usuario)
    }
    
    render(){
        return <form onSubmit={this.handleSubmit}>
        <Box display='flex' flexDirection="column">
            <TextField variant="standard" 
            type="text" 
            name="nome" 
            label="Usuario"
            onChange={this.handleChange} 
            value={this.state.nome}></TextField>
            
            <TextField variant="standard" 
            type="password" 
            name="senha" 
            label="Senha" 
            onChange={this.handleChange} 
            value={this.state.senha}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="idade" 
            label="Idade" 
            onChange={this.handleChange} 
            value={this.state.idade}></TextField>
            <Button type="submit" name="confirm">Confirmar</Button>
        </Box>
        </form>
    }
}