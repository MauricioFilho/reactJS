import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import {Box, Container} from '@mui/material'
import ProdutoPage from "./components/Pages/ProdutoPage";
import EnderecoPage from "./components/Pages/EnderecoPage";

export default class App extends React.Component{
  render(){
    return <Box>
    <Container>
      <Router>
        <Routes>
          <Route path="/produtos" element={<ProdutoPage></ProdutoPage>}></Route>
          <Route path="/enderecos" element={<EnderecoPage></EnderecoPage>}></Route>
          <Route path="/produtos" element={<ProdutoPage></ProdutoPage>}></Route>
          <Route path="/" element={<>
            <nav>
              <ol>
                <li><NavLink to="/produtos">Lista de Produtos</NavLink></li>
                <li><NavLink to="/enderecos">Lista de Endereços</NavLink></li>
                <li><NavLink to="/usuarios">Lista de Usuários</NavLink></li>
              </ol>
            </nav>
          </>}></Route>
        </Routes>
      </Router>
      </Container>
    </Box>
  }
}