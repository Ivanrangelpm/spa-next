import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {

  //Recuperando o ID que chega no request através do PATH.
  //Vamos Utilizar o Hook userParams().

  document.title = "EDITAR PRODUTOS"

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => {
    if(produto.id == id){
       return produto;
    }
  });
  return (
    <>
      <div>
        <form>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" defaultValue={produtoRecuperado[0].nome}/>
            </div>
            <div>
              <label htmlFor="idDescricao">Descrição</label>
              <input type="text" name="desc" id="idDescricao" defaultValue={produtoRecuperado[0].desc}/>
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input type="text" name="preco" id="idPreco" defaultValue={produtoRecuperado[0].preco}/>
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
