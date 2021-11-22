import React from 'react'
import Axios from 'axios'
import EnderecoList from '../Lists/EnderecoList'
import EnderecoForm from '../Forms/EnderecoForm'
import {Snackbar} from "@mui/material"

export default class EnderecoPage extends React.Component{
    
    constructor(props){
        super(props)
        this.API_URL = "http://localhost:8080/api/enderecos"

        this.state = {
            enderecoList: [],
            errorMessage: null,
            snack: false    
        }
    }

    componentDidMount = async () => {
        await this.updateEnderecoList()   
    }

    updateEnderecoList = async () => {
        let enderecoList = await this.getAllEnderecos()
        this.setState({
            enderecoList
        })
    }

    getAllEnderecos = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    inserirEndereco = async (endereco) => {
        console.log(`Inserindo o objeto ${endereco}`)
        try{
            let response = await Axios.post(this.API_URL, endereco)
            if(response.status === 200) {
                await this.updateEnderecoList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err){
            this.openSnackbar(err.message)
        }
    }


    deleteEndereco = async (id) => {
        try{
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if(response.status === 200) {
                await this.updateEnderecoList()
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

    putEndereco = async (id, endereco) => {
        console.log(`Atualizando o id ${id} com o corpo ${JSON.stringify(endereco)}`)

        try{
            let response = await Axios.put(`${this.API_URL}/${id}`, endereco)
            if(response.status === 200) {
                await this.updateEnderecoList()
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
                <h2>Inserir Endereço</h2>
                <EnderecoForm action={this.inserirEndereco}></EnderecoForm>
            </section>
            <section>
                <h2>Listagem de Endereços</h2>
                <EnderecoList list={this.state.enderecoList} 
                deleteRequest={this.deleteEndereco} 
                putRequest={this.putEndereco}></EnderecoList>
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