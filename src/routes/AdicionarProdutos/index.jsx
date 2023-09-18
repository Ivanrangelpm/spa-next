import { useState } from "react";
import { ListaProdutos } from "../../components/ListaProdutos";

export default function AdicionarProdutos(){

    document.title = "ADICIONAR PRODUTO"

    const [ novaListaProdutos, setNovaListaProdutos ] = useState([])

    const [novoProduto, setNovoProduto] = useState({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
      });

    const produto = {
        id: novoProduto.id,
        nome: novoProduto.nome,
        descricao: novoProduto.descricao,
        preco: novoProduto.preco,
    };

    const handleChange = (e) =>{
        //Destrutiring
        const {name,value} = e.target;
    
        //Utilizando o SPREAD para adicionar o conteúdo no state:
        setNovoProduto({...produto,[name]:value});
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

          setNovaListaProdutos(produto)
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Adicionar Produto</legend>
                        <div>
                            <label htmlFor="idAddNome">Nome</label>
                            <input type="text" name="nome" id="idAddNome" value={produto.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddDesc">Descrição</label>
                            <input type="text" name="desc" id="idAddDesc" value={produto.desc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddPreco">Preço</label>
                            <input type="text" name="preco" id="idAddPreco" value={produto.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddImg">Imagem</label>
                            <input type="text" name="img" id="idAddImg" value={produto.img} onChange={handleChange}/>
                        </div>
                        <button>ADD</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}