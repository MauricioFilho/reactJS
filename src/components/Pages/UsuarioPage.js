import React from 'react'
import Axios from 'axios'
import UsuarioList from '../Lists/UsuarioList'
import UsuarioForm from '../Forms/UsuarioForm'
import {Snackbar} from "@mui/material"

export default class UsuarioPage extends React.Component{
    
    constructor(props){
        super(props)
        this.API_URL = "http://localhost:8080/api/usuarios"

        this.state = {
            usuarioList: [],
            errorMessage: null,
            snack: false    
        }
    }

    componentDidMount = async () => {
        await this.updateUsuarioList()   
    }

    updateUsuarioList = async () => {
        let usuarioList = await this.getAllUsuarios()
        this.setState({
            usuarioList
        })
    }

    getAllUsuarios = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    inserirUsuario = async (usuario) => {
        try{
            let response = await Axios.post(this.API_URL, usuario)
            if(response.status === 200) {
                await this.updateUsuarioList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err){
            this.openSnackbar(err.message)
        }
    }


    deleteUsuario = async (id) => {
        try{
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if(response.status === 200) {
                await this.updateUsuarioList()
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

    putUsuario = async (id, usuario) => {
        try{
            let response = await Axios.put(`${this.API_URL}/${id}`, usuario)
            if(response.status === 200) {
                await this.updateUsuarioList()
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
                <h2>Inserir Usuario</h2>
                <UsuarioForm action={this.inserirUsuario}></UsuarioForm>
            </section>
            <section>
                <h2>Listagem de Usuario</h2>
                <UsuarioList list={this.state.usuarioList} 
                deleteRequest={this.deleteUsuario} 
                putRequest={this.putUsuario}></UsuarioList>
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