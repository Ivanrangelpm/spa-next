import { useState } from "react";
import { ListaProdutos } from "../../components/ListaProdutos";
import { useParams } from "react-router-dom";

export default function AdicionarProdutos(){

    document.title = "ADICIONAR PRODUTO"

    const {id} = useParams();

    //Entradas
    const entryNome = document.getElementById("idAddNome");
    const entryDesc = document.getElementById("idAddDesc");
    const entryPreco = document.getElementById("idAddPreco");
    const entryImg = document.getElementById("iddAddImg");

    // const [produto, setProduto] = useState({
    //     id: (id + 1),
    //     nome: entryNome.value,
    //     desc: entryDesc.value,
    //     img: entryImg.value,  
    //     preco: entryPreco.value
    // })

    const handleChange = (e) =>{
        //Destrutiring
        const {name,value} = e.target;
    
        //Utilizando o SPREAD para adicionar o conteúdo no state:
        setProduto({...produto,[name]:value});
    
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Adicionar Produto</legend>
                        <div>
                            <label htmlFor="idAddNome">Nome</label>
                            <input type="text" name="nome" id="idAddNome" value={entryNome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddDesc">Descrição</label>
                            <input type="text" name="desc" id="idAddDesc" value={entryDesc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddPreco">Preço</label>
                            <input type="text" name="preco" id="idAddPreco" value={entryPreco} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idAddImg"></label>
                            <input type="text" name="img" id="idAddImg" value={entryImg} onChange={handleChange}/>
                        </div>
                        <button>ADD</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}