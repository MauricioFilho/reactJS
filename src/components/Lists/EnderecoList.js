import React from "react";
import EnderecoItem from "../Items/EnderecoItem";
import {Table, TableRow, TableHead, TableBody, TableCell} from '@mui/material'

export default class EnderecoList extends React.Component{
    render() {
        if (this.props.list.length === 0) 
            return <p>Não possui endereços cadastrados!</p>

        let listaEnderecos = this.props.list.map(item => {
            return <EnderecoItem endereco={item}
                key={
                    item._id
                }
                delete={
                    () => {
                        this.props.deleteRequest(item._id)
                    }
                }
                edit={
                    (endereco) => {
                        this.props.putRequest(item._id, endereco)
                    }
            }></EnderecoItem>
        })

        return <Table>
        <TableHead>
            <TableRow>
                <TableCell>CEP</TableCell>
                <TableCell>Rúa</TableCell>
                <TableCell>Número</TableCell>
                <TableCell>Bairro</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>País</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>        
        </TableHead>
        <TableBody>
            {listaEnderecos}
        </TableBody>
        </Table>
    }

}