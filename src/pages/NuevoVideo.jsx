import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import useModalEdit from "../Hooks/Editar";
import styled from "styled-components";

import FormVideo from "../Components/FormVideo";


const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--DarkGrey);
    color: var(--White);
    padding: 2rem 0;

    h2 {
        margin:0;
        font-family: var(--Bold);
        font-size: 3em
    }

    p{
        font-size: 1em;
        font-family: var(--Regular);
        text-transform: uppercase;
    }

    @media (min-width: 1024px){
        height: 76vh;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;

    width: 80%;
    padding: 2rem 0;

    h3{
        font-size: 2em;
    }
`;

const FormEstilizado = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const BotonesContainer = styled.div`

    width: 100%;
    display: flex;
    gap: 3em;

    padding: 1em;

    button{
        background-color: transparent;
        color: var(--White);
        padding: 0.5em 1em;
        border: 3px solid var(--Blue);
        border-radius: 10px;
        min-width: 5em;

        font-size: 1.5em;
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            border-color: var(--White);
            box-shadow: 0 0 20px var(--White);
        }
    }
`;

function NuevoVideo() {

    // Global
    const { AgregarNuevoVideo } = useModalEdit();

    // Form
    const methods = useForm();

    const onSubmit = (data) => {
        AgregarNuevoVideo({...data,id: uuidv4()});
        methods.reset(); 
    };

    return (
        <Container>
            <h2>Nuevo Video</h2>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <FormContainer>
                <h3>Crear Tarjeta</h3>
                <FormProvider {...methods} >
                    <FormEstilizado onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormVideo/>
                        <BotonesContainer>
                            <button type="submit">Enviar</button>
                            <button type="reset">Limpiar</button>
                        </BotonesContainer>
                    </FormEstilizado>
                </FormProvider>
            </FormContainer>
        </Container>
    )
}

export default NuevoVideo;