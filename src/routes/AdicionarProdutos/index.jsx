import { useState } from "react";
import { ListaProdutos } from "../../components/ListaProdutos";

export default function AdicionarProdutos(){

    document.title = "ADICIONAR PRODUTO"

    const novoProdutoId = Math.max(...ListaProdutos.map((produto) => produto.id)) + 1

    const [novoProduto, setNovoProduto] = useState({
        id: novoProdutoId,
        nome: '',
        descricao: '',
        preco: '',
        img: ''
      });
    
    const handleChange = (e) =>{
        //Destrutiring
        const {name,value} = e.target;

        //Utilizando o SPREAD para adicionar o conteúdo no state:
        setNovoProduto({...novoProduto,[name]:value});
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        ListaProdutos.push(novoProduto)
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
                            <input type="text" name="desc" id="idAddDesc" value={novoProduto.desc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddPreco">Preço</label>
                            <input type="text" name="preco" id="idAddPreco" value={novoProduto.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddImg">Imagem</label>
                            <input type="text" name="img" id="idAddImg" value={novoProduto.imagem} onChange={handleChange}/>
                        </div>
                        <button>ADD</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}