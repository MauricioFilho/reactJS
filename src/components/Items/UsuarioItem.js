import React from "react";
import UsuarioForm from "../Forms/UsuarioForm";
import {TableRow, TableCell, Button} from '@mui/material'

export default class UsuarioItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isUpdating: false
        }
    }

    setUpdateTrigger = () => {
        this.setState({
            isUpdating: !this.state.isUpdating
        })
    }

    handleDelete = () => {
        this.props.delete()
    }

    confirm = (usuario) => {
        this.props.edit(usuario)
        this.setUpdateTrigger()
    }


    render(){
        let form = this.state.isUpdating ? 
        <TableRow>
            <TableCell colSpan={4}>
                <UsuarioForm 
                nome={this.props.usuario.nome} 
                senha={this.props.usuario.valor} 
                idade={this.props.usuario.descricao}
                action={this.confirm}>
                </UsuarioForm>
            </TableCell>
        </TableRow> : null

        let buttonDelete = <Button variant="outlined" color="error" type="button" onClick={this.handleDelete}>Deletar</Button>
        let buttonEdit = <Button variant="outlined" type="button" onClick={this.setUpdateTrigger}>Editar</Button>
        let buttonContainer = <span>{buttonEdit} {buttonDelete}</span>

        return <>
            <TableRow>
                <TableCell>{this.props.usuario.nome}</TableCell>
                <TableCell>{this.props.usuario.senha}</TableCell>
                <TableCell>{this.props.usuario.idade}</TableCell>
                <TableCell>{buttonContainer}</TableCell>
            </TableRow>
            {form}
        </>
    }

}