import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Context/GlobalContext";

const OpcionesContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap: 1em;

    border-color: transparent;
    color: var(--White);
    width: 80%;

    label {
        font-size: 1.2em;
    }

    select {
        width: 105%;
        background-color: transparent;
        padding: 0.5em;
        border: 4px solid var(--Blue);
        border-radius: 10px;
        
        font-size: 1.2em;
        color: var(--LightGrey);
        resize: none;
        
        transition: 0.3s;

        &:focus {
            outline: none;
            border: 4px solid var(--White);
            box-shadow: 0 0 10px var(--White);  
        }

        option{
            width: 100%;
            background-color: #03122F;
            color: var(--White);
        }
    }
`;

function ListaOpciones({titulo}){

    const { state } =  useContext(GlobalContext);

    return(
        <OpcionesContainer>
            <label>{titulo}</label>
            <select>
                {state.equipos.map((equipo,index) => <option key={index} value={equipo.titulo}>{equipo.titulo}</option>)}
            </select>
        </OpcionesContainer>
    )
}

export default ListaOpciones;