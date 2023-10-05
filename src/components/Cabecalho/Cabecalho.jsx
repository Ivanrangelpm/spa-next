import { Link } from "react-router-dom";
import 

export default function Cabecalho(){

    return(
        <header className="cabecalho">
            <nav>
            {/* <h1>Vite + React / Coded by - rm551408</h1> */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </nav>
        </header>
    );
}