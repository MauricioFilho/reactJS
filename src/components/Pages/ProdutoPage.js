import React from 'react'
import Axios from 'axios'
import ProdutoList from '../Lists/ProdutoList'
import ProdutoForm from '../Forms/ProdutoForm'
import {Snackbar} from "@mui/material"

export default class ProdutoPage extends React.Component{
    
    constructor(props){
        super(props)
        this.API_URL = "http://localhost:8080/api/produtos"

        this.state = {
            produtoList: [],
            errorMessage: null,
            snack: false    
        }
    }

    componentDidMount = async () => {
        await this.updateProdutoList()   
    }

    updateProdutoList = async () => {
        let produtoList = await this.getAllProdutos()
        this.setState({
            produtoList
        })
    }

    getAllProdutos = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    inserirProduto = async (produto) => {
        console.log(`Deletando o id ${produto}`)
        try{
            let response = await Axios.post(this.API_URL, produto)
            if(response.status === 200) {
                await this.updateUserList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err){
            this.openSnackbar(err.message)
        }
    }


    deleteProduto = async (id) => {
        try{
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if(response.status === 200) {
                await this.updateProdutoList()
            }
            this.setState({
                errorMessage: null
            })
        } catch (err){
            this.setState({
                errorMessage: err.message
            })
        }
    }

    putProduto = async (id, produto) => {
        console.log(`Atualizando o id ${id} com o corpo ${JSON.stringify(produto)}`)

        try{
            let response = await Axios.put(`${this.API_URL}/${id}`, produto)
            if(response.status === 200) {
                await this.updateProdutoList()
            }

            this.setState({
                errorMessage: null
            })  
        } catch (err){
            this.setState({
                errorMessage: err.message
            })
        }
    }

    openSnackbar = (msg) => {
        this.setState({
            errorMessage: msg,
            snack: true
        })
    }

    closeSnackbar = () => {
        this.setState({
            errorMessage: null,
            snack: false
        })
    }

    render(){
        return <>
            <section>
                <h2>Inserir Produto</h2>
                <ProdutoForm action={this.inserirProduto}></ProdutoForm>
            </section>
            <section>
                <h2>Listagem de Produtos</h2>
                <ProdutoList list={this.state.produtoList} 
                deleteRequest={this.deleteProduto} 
                putRequest={this.putProduto}></ProdutoList>
            </section>
            <Snackbar
            open={this.state.snack}
            autoHideDuration={5000}
            onClose={this.closeSnackbar}
            message={this.state.errorMessage}
            />
        </>
    }
}