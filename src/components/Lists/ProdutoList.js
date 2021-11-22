import React from "react";
import ProdutosItem from "../Items/ProdutosItem";
import {Table, TableRow, TableHead, TableBody, TableCell} from '@mui/material'

export default class ProdutoList extends React.Component{
    render() {
        if (this.props.list.length === 0) 
            return <p>Não possui produtos cadastrados!</p>

        let listaProdutos = this.props.list.map(item => {
            return <ProdutosItem produto={item}
                key={
                    item._id
                }
                delete={
                    () => {
                        this.props.deleteRequest(item._id)
                    }
                }
                edit={
                    (produto) => {
                        this.props.putRequest(item._id, produto)
                    }
            }></ProdutosItem>
        })

        return <Table>
        <TableHead>
            <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>        
        </TableHead>
        <TableBody>
            {listaProdutos}
        </TableBody>
        </Table>
    }

}