import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss"

export default function Cabecalho(){

    const rotaAtual = useLocation();
    console.log("ROTA ATUAL: " + rotaAtual.pathname)

    return(
        <header className="cabecalho">
            <nav>
            {/* <h1>Vite + React / Coded by - rm551408</h1> */}
                <ul>
                    <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link></li>
                </ul>
            </nav>
        </header>
    );
}