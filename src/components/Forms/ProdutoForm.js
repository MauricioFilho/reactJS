import React from "react";
import {Button, TextField, Box} from '@mui/material'

export default class ProdutoForm extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            nome: this.props.nome || "",
            valor: this.props.valor || "",
            descricao: this.props.descricao || "",
            codigo: this.props.codigo || ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefaut()
        let produto = {
            nome: this.state.nome,
            valor: this.state.valor,
            descricao: this.state.descricao,
            codigo: this.state.codigo
        }
        this.props.action(produto)
    }
    
    render(){
        return <form onSubmit={this.handleSubmit}>
        <Box display='flex' flexDirection="column">
            <TextField variant="standard" 
            type="text" 
            name="nome" 
            label="Produto"
            onChange={this.handleChange} 
            value={this.state.nome}></TextField>
            
            <TextField variant="standard" 
            type="text" 
            name="valor" 
            label="Valor" 
            onChange={this.handleChange} 
            value={this.state.valor}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="descricao" 
            label="Descrição" 
            onChange={this.handleChange} 
            value={this.state.descricao}></TextField>

            <TextField variant="standard" 
            type="text" 
            name="codigo" 
            label="Código" 
            onChange={this.handleChange} 
            value={this.state.codigo}></TextField>
            <Button type="submit" name="confirm">Confirmar</Button>
        </Box>
        </form>
    }
}