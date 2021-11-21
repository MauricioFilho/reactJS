import React from "react";
import ProdutoPage from "./components/Produtos/ProdutoPage";

export default class App extends React.Component{


  constructor(props){
    super(props)

    this.state = {

    }
  }

  render = () => {
     return <main>
       <ProdutoPage></ProdutoPage>
     </main> 
  }

}