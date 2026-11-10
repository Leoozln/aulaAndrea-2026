import { Link } from 'react-router-dom';
import "./Header.css";

function Header(){
        return(
            <header>
                    <h1>Sistema de pessoas e cargos</h1>
                    <nav>
                        <Link to="/">Início</Link>
                        {' | '}
                        <Link to="/pessoas">Pessoas</Link>
                        {' | '}
                        <Link to="/cargos">Cargos</Link>
                    </nav>
            </header>
        );
}

export default Header;
