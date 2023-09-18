import { Link } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai";
import {BsFillTrashFill as BinObj} from "react-icons/bs";
import estilos from "./index.module.css";

export default function Produto(){

  document.title = "PRODUTOS"

    return(
        <>
          <h1>Produtos Informáticos - FIAPO</h1>
          <div>
            <Link to={"/adicionar/produtos"}>
              <button>Adicionar novo produto</button>
            </Link>
          </div>
          <table className={estilos.tblEstilo}>
          <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>IMAGEM</th>
                <th>Editar/Excluir</th>
              </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((produto, indice)=>(
                  <tr key={indice} className={estilos.tblLine}>
                      <td>{produto.id}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.desc}</td>
                      <td>{produto.preco}</td>
                      <td><img src={produto.img} alt={produto.desc} /></td>
                      <td>
                        <Link to={`/editar/produtos/${produto.id}`}> <EditObj/></Link> |
                        <Link to={`/excluir/produtos/${produto.id}`}><BinObj/></Link>
                      </td>
                  </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                  <td colSpan={6}>PRODUTOS</td>
              </tr>
            </tfoot>
          </table>
        </>
    )
}