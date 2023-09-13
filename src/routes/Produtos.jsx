import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai";
import {BsFillTrashFill as BinObj} from "react-icons/bs";
import estilos from "./Produtos.module.css";

export default function Produto(){

  document.title = "PRODUTOS"

    return(
        <>
            <h1>Produtos Informáticos - FIAPO</h1>
            <table className={estilos.tblEstilo}>
            <thead>
                <tr>
                  <th className={estilos.tblHeader}>ID</th>
                  <th className={estilos.tblHeader}>NOME</th>
                  <th className={estilos.tblHeader}>DESCRIÇÃO</th>
                  <th className={estilos.tblHeader}>PREÇO</th>
                  <th className={estilos.tblHeader}>Editar/Excluir</th>
                </tr>
              </thead>

              <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice} className={estilos.tblLine}>
                        <td className={estilos.tblData}>{produto.id}</td>
                        <td className={estilos.tblData}>{produto.nome}</td>
                        <td className={estilos.tblData}>{produto.desc}</td>
                        <td className={estilos.tblData}>{produto.preco}</td>
                        <td className={estilos.tblData}> <Link to={`/editar/produtos/${produto.id}`}> <EditObj/></Link> |
                        <Link to={`/excluir/produtos/${produto.id}`}><BinObj/></Link></td>
                    </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                    <td colSpan={4}>PRODUTOS</td>
                </tr>
              </tfoot>
            </table>
        </>
    )
}