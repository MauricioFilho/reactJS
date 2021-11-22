import React from "react";
import {Button, TextField, Box} from '@mui/material'

export default class EnderecoForm extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            cep: this.props.cep || "",
            rua: this.props.rua || "",
            numero: this.props.numero || "",
            bairro: this.props.bairro || "",
            cidade: this.props.cidade || "",
            pais: this.props.pais || ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let endereco = {
            cep: this.state.cep,
            rua: this.state.rua,
            numero: this.state.numero,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            pais: this.state.pais
        }
        console.log(endereco)
        this.props.action(endereco)
    }
    
    render(){
        return <form onSubmit={this.handleSubmit}>
        <Box display='flex' flexDirection="column">
            <TextField variant="standard" 
            type="text" 
            name="cep" 
            label="CEP"
            onChange={this.handleChange} 
            value={this.state.cep}></TextField>
            
            <TextField variant="standard" 
            type="text" 
            name="rua" 
            label="Rua" 
            onChange={this.handleChange} 
            value={this.state.rua}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="numero" 
            label="Número" 
            onChange={this.handleChange} 
            value={this.state.numero}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="bairro" 
            label="Bairro" 
            onChange={this.handleChange} 
            value={this.state.bairro}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="cidade" 
            label="Cidade" 
            onChange={this.handleChange} 
            value={this.state.cidade}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="pais" 
            label="Pais" 
            onChange={this.handleChange} 
            value={this.state.pais}></TextField>
            <Button type="submit" name="confirm">Confirmar</Button>
        </Box>
        </form>
    }
}