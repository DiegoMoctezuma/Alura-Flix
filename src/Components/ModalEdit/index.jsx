import styled from "styled-components";
import Campo from "../Campo";
import TextArea from "../TextArea";
import ListaOpciones from "../ListaOpciones";
import BotonTexto from "../BotonTexto";


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
    top: 100vh;

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

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const BotonesContainer = styled.div`
    width: 100%;
    padding-top: 1em;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

function ModalEdit() {
    return (
        <>
            <Overlay/>
            <DialogEstilizado open={true} >
                <h2>Editar Card</h2>
                <form method="dialog">
                    <Campo titulo={"Titulo"}/>
                    <ListaOpciones titulo={"Equipo"}/>
                    <Campo titulo={"Imagen"} type="url"/>
                    <Campo titulo={"Video"} type="url"/>
                    <TextArea titulo={"Descripción"}/>
                    <BotonesContainer>
                        <BotonTexto texto={"Guardar"} activo={true}/>
                        <BotonTexto texto={"Limpiar"}/>
                    </BotonesContainer>
                </form>
            </DialogEstilizado>
        </>
    )
}

export default ModalEdit;