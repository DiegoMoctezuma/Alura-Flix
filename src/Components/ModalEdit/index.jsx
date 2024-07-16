import { FormProvider, useForm } from "react-hook-form";
import useModalEdit from "../../Hooks/Editar";

import styled from "styled-components";
import iconCerrar from "/img/cancel.svg";

import Campo from "../Campo";
import TextArea from "../TextArea";
import ListaOpciones from "../ListaOpciones";
import FormVideo from "../FormVideo";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0,0,0,0.7);
`;

const DialogEstilizado = styled.dialog`
    position:absolute;
    top: ${props => props.$mitadY}px;
    bottom: -${props => props.$mitadY}px;

    background-color: #03122F;
    padding: 2em;
    border: 0;
    width: 50vw;
    border: 5px solid var(--Blue);
    border-radius: 15px;
    box-shadow: 0 0 40px var(--Blue);

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: var(--Blue);
        text-transform: uppercase;
        font-size: 2em;
    }

    img{
        position: absolute;
        top: 1em;
        right: 1em;
        width: 3em;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }
`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    fieldset{
        display: inline-block;
        width: 90%;
        margin:0;
    }
`;

const BotonesContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-around;

    padding: 1em 0 0 0;

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

function ModalEdit() {

    const { modalAbierto,videoSeleccionado,EditCerrado,EditarContenido } = useModalEdit();
    
    const methods = useForm();

    const onSubmit = (data) => {
        if(modalAbierto){
            EditarContenido({...data,id:videoSeleccionado.id});
            EditCerrado();
        }
    };

    const onClose = () => {
        EditCerrado(); 
        methods.reset();
    }

    return (
        modalAbierto &&
        <>
            <Overlay/>
            <DialogEstilizado open={true} $mitadY={window.scrollY}>
                <img src={iconCerrar} onClick={onClose}/>
                <h2>Editar Card</h2>
                <FormProvider {...methods}>
                    <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormVideo/>
                        <BotonesContainer>
                            <button style={{backgroundColor:"var(--Black)"}} type="submit">Enviar</button>
                            <button type="reset">Limpiar</button>
                        </BotonesContainer>
                    </FormContainer>
                </FormProvider>
            </DialogEstilizado>
        </>
    )
}

export default ModalEdit;