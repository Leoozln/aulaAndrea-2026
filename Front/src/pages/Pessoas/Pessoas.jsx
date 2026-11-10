import { useEffect, useState } from 'react';
import API_URL from "../../services/api.js";
import './Pessoas.css'

function Pessoas() {

    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        buscarPessoas();
    }, []);

    async function buscarPessoas() {
        const resposta = await fetch(`${API_URL}/pessoas`);
        const dados = await resposta.json();

        setPessoas(dados);
    }

    async function cadastrarPessoa() {
        await fetch(`${API_URL}/pessoas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pes_nome: nome })
        });

        setNome('');
        buscarPessoas();
    }

    async function excluirPessoa(id) {
        await fetch(`${API_URL}/pessoas/${id}`, {
            method: 'DELETE'
        });

        buscarPessoas();
    }

    return (
        <div>
            <h2>Pessoas cadastradas</h2>

            <input
                type="text"
                placeholder="Nome da pessoa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button onClick={cadastrarPessoa}>Cadastrar</button>

            {pessoas.map((pessoa) => (
                <p key={pessoa.pes_id}>
                    {pessoa.pes_nome}
                    {' '}
                    <button onClick={() => excluirPessoa(pessoa.pes_id)}>Excluir</button>
                </p>
            ))}
        </div>
    );
}

export default Pessoas;
