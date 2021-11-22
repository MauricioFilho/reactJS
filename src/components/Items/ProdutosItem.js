import React from "react";
import ProdutoForm from "../Forms/ProdutoForm";
import {TableRow, TableCell, Button} from '@mui/material'

export default class ProdutosItem extends React.Component{
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

    confirm = (produto) => {
        this.props.edit(produto)
        this.setUpdateTrigger()
    }


    render(){
        let form = this.state.isUpdating ? 
        <TableRow>
            <TableCell colSpan={5}>
                <ProdutoForm 
                nome={this.props.produto.nome} 
                valor={this.props.produto.valor} 
                descricao={this.props.produto.descricao}
                codigo={this.props.produto.codigo}
                action={this.confirm}>
                </ProdutoForm>
            </TableCell>
        </TableRow> : null

        let buttonDelete = <Button variant="outlined" color="error" type="button" onClick={this.handleDelete}>Deletar</Button>
        let buttonEdit = <Button variant="outlined" type="button" onClick={this.setUpdateTrigger}>Editar</Button>
        let buttonContainer = <span>{buttonEdit} {buttonDelete}</span>

        return <>
            <TableRow>
                <TableCell>{this.props.produto.nome}</TableCell>
                <TableCell>{this.props.produto.valor}</TableCell>
                <TableCell>{this.props.produto.descricao}</TableCell>
                <TableCell>{this.props.produto.codigo}</TableCell>
                <TableCell>{buttonContainer}</TableCell>
            </TableRow>
            {form}
        </>
    }

}