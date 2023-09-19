import { useState } from "react";
import { ListaProdutos } from "../../components/ListaProdutos";
import { useParams } from "react-router-dom";

export default function AdicionarProdutos(){

    document.title = "ADICIONAR PRODUTO"

    const {id} = useParams();

    const [ListProdutos, setListProdutos] = useState([]);

    const [novoProduto, setNovoProduto] = useState({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        img: ''
      });

    const handleChange = (e) =>{
        //Destrutiring
        const {name,value} = e.target;

        const novoProdutoId = Math.max(...ListProdutos.map((produto) => produto.id)) + 1

        const produto = {
            id: novoProdutoId,
            nome: novoProduto.nome,
            descricao: novoProduto.descricao,
            preco: novoProduto.preco,
            img: novoProduto.img
        };
    
        //Utilizando o SPREAD para adicionar o conteúdo no state:
        setNovoProduto({...produto,[name]:value});

        const novaLista = [...ListProdutos, produto]
        setListProdutos(novaLista)

        setNovoProduto({
            nome: '',
            descricao: '',
            preco: '',
            img: ''
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault();


        setNovoProduto({
            id: '',
            nome: '',
            descricao: '',
            preco: '',
          });
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Adicionar Produto</legend>
                        <div>
                            <label htmlFor="idAddNome">Nome</label>
                            <input type="text" name="nome" id="idAddNome" value={novoProduto.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddDesc">Descrição</label>
                            <input type="text" name="desc" id="idAddDesc" value={novoProduto.descricao} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddPreco">Preço</label>
                            <input type="text" name="preco" id="idAddPreco" value={novoProduto.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddImg">Imagem</label>
                            <input type="text" name="img" id="idAddImg" value={novoProduto.img} onChange={handleChange}/>
                        </div>
                        <button>ADD</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}