import { useEffect, useState } from 'react';
import API_URL from "../../services/api.js";
import './Pessoas.css'

function Pessoas() {

    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState('');
    const [idEditando, setIdEditando] = useState(null);

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

    function editarPessoa(pessoa) {
        setIdEditando(pessoa.pes_id);
        setNome(pessoa.pes_nome);
    }

    async function atualizarPessoa() {
        await fetch(`${API_URL}/pessoas/${idEditando}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pes_nome: nome })
        });

        setIdEditando(null);
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
            <button onClick={idEditando ? atualizarPessoa : cadastrarPessoa}>
                {idEditando ? 'Salvar' : 'Cadastrar'}
            </button>

            {pessoas.map((pessoa) => (
                <p key={pessoa.pes_id}>
                    {pessoa.pes_nome}
                    {' '}
                    <button onClick={() => editarPessoa(pessoa)}>Editar</button>
                    {' '}
                    <button onClick={() => excluirPessoa(pessoa.pes_id)}>Excluir</button>
                </p>
            ))}
        </div>
    );
}

export default Pessoas;
