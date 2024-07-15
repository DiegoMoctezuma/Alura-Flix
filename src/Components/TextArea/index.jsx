import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const TextContainer = styled.fieldset`
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
`;

const TextAreaEstilizado = styled.textarea`
        width: 100%;
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
        &::placeholder{
        color: ${props => props.$color};
    }
`;

function TextArea({titulo,placeholder="",objKey, value}) {

    const { register, formState:{ errors } } = useFormContext();

    return(
        <TextContainer $color={ errors[objKey] ? "var(--Red)" : "var(--LightGrey)"}>
            <label>{titulo}</label>
            <TextAreaEstilizado 
                {...register(objKey,{
                    value: value,
                    required:{
                        value: true,
                        message: `El campo descripción es obligatorio`
                    },
                    validate: value => value.trim() !== ""
                })} 
                placeholder={
                    errors[objKey] ? errors[objKey].message : placeholder
                }
                style={errors[objKey] ? {borderColor:"var(--Red)",boxShadow: "0 0 20px var(--Red)"} : {} }
                rows={8}
                $color={ errors[objKey] ? "var(--Red)" : "var(--LightGrey)"}
            />
        </TextContainer>
    )
}

export default TextArea;