import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

import styled from "styled-components";
import iconoBorrar from "/img/Borrar.svg";
import iconoEditar from "/img/Editar.svg";

const CardEstilizado = styled.div`
    min-width: 40%;
    height: auto;

    border: 5px solid ${props => props.$color};
    border-radius: 15px;
    box-shadow: 0 0 20px ${props => props.$color};

    img {
        border-radius: 10px 10px 0 0;
        max-height: 40vh;
        width: 100%;
        object-fit: fill;
    }
`;

const Botones = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 1em;
    background-color: var(--Black);
    border-radius: 0 0 15px 15px;

    img{
        height: 28px;
        width: auto;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            transform: scale(1.1);
        }
    }
`;

function Card({color,video}) {

    const { setModalAbierto } = useContext(GlobalContext)

    return (
        <CardEstilizado $color={color}>
            <img src={video.imagen}/>
            <Botones>
                <img src={iconoBorrar}/>
                <img src={iconoEditar} onClick={() => setModalAbierto(true)}/>
            </Botones>
        </CardEstilizado>
    );
}

export default Card;