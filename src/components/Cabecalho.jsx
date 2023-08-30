import { Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <header>
            <h1>Vite + React / Coded by - rm551408</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/editar/produtos/1">Produtos - 1</Link></li>
                    <li><Link to="/editar/produtos/2">Produtos - 2</Link></li>
                    <li><Link to="/editar/produtos/3">Produtos - 3</Link></li>
                </ul>
        </header>
    );
}