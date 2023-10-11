import { useNavigate, useParams } from "react-router-dom";
import style from "./index.module.css";
import { useEffect, useState } from "react";

export default function ExcluirProdutos() {

  document.title = "EXCLUIR PRODUTO";

  const navigate = useNavigate();
  const { id } = useParams();
  const [produto, setProduto] = useState({
    id: id,
    nome: '',
    desc: '',
    img: '',
    preco: ''
  });

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`,{ 
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((response) => setProduto(response))
    .catch((error) => console.log(error))
  }, [id]);
 
  const handleDelete = ()=>{
    
    fetch(`http://localhost:5000/produtos/${id}`,{method: 'delete'})
    .then(()=> (window.location = '/produtos'))
    .catch((error)=> console.log(error))

    alert("Produto excluído com SUCESSO!");

    //Redirecionando o usuáio para a página de produtos!
    navigate('/produtos');
  }


  return (
    <>
        <div>
          <h1 className={style.tit}>Excluir Produtos</h1>
          
          <div className={style.card}>
            <h2>Produto Selecionado</h2>
            <figure>
              <img src={produto.img} alt={produto.desc} />
              <figcaption>{produto.nome} - <span>R$ {produto.preco}</span></figcaption>
            </figure>
            
            <div className={style.btn}>
              <button onClick={handleDelete}>EXCLUIR</button>
              <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>

          </div>

        </div>
    </>
  )
}