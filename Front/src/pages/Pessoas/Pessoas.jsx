import { useEffect, useState } from 'react';
import API_URL from "../../services/api.js";
import './Pessoas.css'

function Pessoas() {

    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        buscarPessoas();
    }, []);

    async function buscarPessoas() {
        const resposta = await fetch(`${API_URL}/pessoas`);
        const dados = await resposta.json();

        setPessoas(dados);
    }

    return (
        <div>
            <h2>Pessoas cadastradas</h2>

            {pessoas.map((pessoa) => (
                <p key={pessoa.pes_id}>
                    {pessoa.pes_nome}
                </p>
            ))}
        </div>
    );
}

export default Pessoas;
