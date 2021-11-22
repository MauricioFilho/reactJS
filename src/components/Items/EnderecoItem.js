import React from "react";
import {TableRow, TableCell, Button} from '@mui/material'
import EnderecoForm from "../Forms/EnderecoForm";

export default class EnderecoItem extends React.Component{
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

    confirm = (endereco) => {
        this.props.edit(endereco)
        this.setUpdateTrigger()
    }


    render(){
        let form = this.state.isUpdating ? 
        <TableRow>
            <TableCell colSpan={5}>
                <EnderecoForm
                cep={this.props.endereco.cep} 
                rua={this.props.endereco.rua} 
                numero={this.props.endereco.numero}
                bairro={this.props.endereco.bairro}
                cidade={this.props.endereco.cidade}
                pais={this.props.endereco.pais}
                action={this.confirm}>
                </EnderecoForm>
            </TableCell>
        </TableRow> : null

        let buttonDelete = <Button variant="outlined" color="error" type="button" onClick={this.handleDelete}>Deletar</Button>
        let buttonEdit = <Button variant="outlined" type="button" onClick={this.setUpdateTrigger}>Editar</Button>
        let buttonContainer = <span>{buttonEdit} {buttonDelete}</span>

        return <>
            <TableRow>
                <TableCell>{this.props.endereco.cep}</TableCell>
                <TableCell>{this.props.endereco.rua}</TableCell>
                <TableCell>{this.props.endereco.numero}</TableCell>
                <TableCell>{this.props.endereco.bairro}</TableCell>
                <TableCell>{this.props.endereco.cidade}</TableCell>
                <TableCell>{this.props.endereco.pais}</TableCell>
                <TableCell>{buttonContainer}</TableCell>
            </TableRow>
            {form}
        </>
    }

}