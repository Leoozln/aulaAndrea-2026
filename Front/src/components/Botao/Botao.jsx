import "./Botao.css";

function Botao(props){
        return(
                <button>
                   {props.titulo}
                </button>
        );
}

export default Botao;