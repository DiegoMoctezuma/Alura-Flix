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
`;

function TextArea({titulo,value,set,required=false,placeholder=""}) {
    return(
        <TextContainer>
            <label>{titulo}</label>
            <TextAreaEstilizado placeholder={placeholder} required={required} value={value} rows={8} onChange={e => set(e.target.value)}/>
        </TextContainer>
    )
}

export default TextArea;