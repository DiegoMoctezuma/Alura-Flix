import { Link } from "react-router-dom";
import styled from "styled-components";

const BotonEstilizado = styled.button`
    height:54px;
    min-width:180px;
    padding: 0 2rem;
    
    background-color: ${props => (props.$activo ? "var(--Black)" : "transparent")};
    color: ${props => (props.$activo ? "var(--Blue)" : "var(--White)")};
    border: 3px solid transparent;
    border-color: ${props => (props.$activo ? "var(--Blue)" : "var(--White)")};
    box-shadow: ${props => (props.$activo ? "0 0 20px var(--Blue)" : "var(--White)")};

    border-radius: 15px;
    text-transform: uppercase;
    font-family: var(--FontBold);
    font-size:20px;

    cursor: pointer;
    transition: 0.4s;

    &:hover{
        border-color: var(--Blue);
        color: var(--Blue);
    }
`;

function BotonTexto({texto,activo=false,to=''}){
    return(
        <Link to={`/${to}`}>
            <BotonEstilizado $activo={activo}>
                {texto}
            </BotonEstilizado>
        </Link>
    )
}

export default BotonTexto;