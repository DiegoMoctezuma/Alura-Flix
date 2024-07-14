import styled from "styled-components";


const CampoContainer = styled.fieldset`
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

    input {
        width: 100%;
        background-color: transparent;
        padding: 0.5em;
        border: 4px solid var(--Blue);
        border-radius: 10px;

        font-size: 1.2em;
        color: var(--LightGrey);

        transition: 0.3s;

        &:focus {
            outline: none;
            border: 4px solid var(--White);
            box-shadow: 0 0 10px var(--White);  
        }
    }
`;

function Campo({titulo,type="text",value,set,required=false}){
    return(
        <CampoContainer>
            <label>{titulo}</label>
            <input type={type} value={value} onChange={(e) => set(e.target.value)} required={required}/>
        </CampoContainer>
    )
}

export default Campo;