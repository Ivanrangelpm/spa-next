import { useParams } from "react-router-dom"
import Produto from "./Produtos";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {

  //Recuperando o ID que chega no request através do PATH.
  //Vamos Utilizar o Hook userParams().

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => {
    if(produto.id == id){
       return produto;
    }
  });
  return (
    <>
      <h1>EditarProdutos</h1>
      <h2>PRODUTO</h2>
      <p>Nome: {produtoRecuperado[0].nome}</p>
      <p>Descrição: {produtoRecuperado[0].desc}</p>
      <p>Preço: {produtoRecuperado[0].preco}</p>
    </>
  )
}
