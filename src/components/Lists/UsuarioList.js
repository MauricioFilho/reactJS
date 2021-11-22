import React from "react";
import UsuarioItem from "../Items/UsuarioItem";
import {Table, TableRow, TableHead, TableBody, TableCell} from '@mui/material'

export default class UsuarioList extends React.Component{
    render() {
        if (this.props.list.length === 0) 
            return <p>Não possui usuários cadastrados!</p>

        let listaUsuarios = this.props.list.map(item => {
            return <UsuarioItem usuario={item}
                key={
                    item._id
                }
                delete={
                    () => {
                        this.props.deleteRequest(item._id)
                    }
                }
                edit={
                    (usuario) => {
                        this.props.putRequest(item._id, usuario)
                    }
            }></UsuarioItem>
        })

        return <Table>
        <TableHead>
            <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Senha</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>        
        </TableHead>
        <TableBody>
            {listaUsuarios}
        </TableBody>
        </Table>
    }

}