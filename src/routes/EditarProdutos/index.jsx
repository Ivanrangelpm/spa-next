import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function EditarProdutos() {

  //Recuperando o ID que chega no request através do PATH.
  //Vamos Utilizar o Hook userParams().

  const {id} = useParams();

  document.title = "EDITAR PRODUTOS"

  const navigate = useNavigate(); 

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

  const handleChange = (e) =>{
    //Destrutiring
    const {name,value} = e.target;

    //Utilizando o SPREAD para adicionar o conteúdo no state:
    setProduto({...produto,[name]:value});

  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    fetch(`http://localhost:5000/produtos/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })
    .then((response)=> response.json())
    .then((response)=> console.log(response))
    .catch(error=> console.log(error));

    alert("Seu produto foi alterado com Sucesso!")
    //Redirecionando o usuário para a página de produtos
    navigate("/produtos");
  }

  return (
    <>
      <div>
      <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto Selecionado!</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
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
