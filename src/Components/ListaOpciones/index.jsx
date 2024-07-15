import { GlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

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
        color: ${props => props.$color};
    }

    select {
        width: 105%;
        background-color: transparent;
        padding: 0.5em;
        border: 4px solid var(--Blue);
        border-radius: 10px;
        
        font-size: 1.2em;
        color: ${props => props.$color};
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

function ListaOpciones({titulo,objKey,value}){

    const { state } =  useContext(GlobalContext);
    const { register, formState:{ errors } } = useFormContext();

    return(
        <OpcionesContainer $color={errors[objKey] ? "var(--Red)" : "var(--LightGrey)"}>
            <label>{titulo}</label>
            <select 
                {...register(objKey,{
                    value: value,
                    validate: value => value !== "default"
                })} 
                style={ errors[objKey] ? {borderColor:"var(--Red)"} : {}}
            >
                {state.equipos.map((equipo,index) => 
                    <option key={index} value={equipo.titulo}>
                        {equipo.titulo}
                    </option>)}
                <option  value={"default"} disabled hidden>seleccione una categoría</option>
            </select>
        </OpcionesContainer>
    )
}

export default ListaOpciones;