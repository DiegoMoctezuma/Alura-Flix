import { useEffect, useState } from "react";
import useModalEdit from "../../Hooks/Editar";

import styled from "styled-components";
import iconCerrar from "/img/cancel.svg";

import Campo from "../Campo";
import TextArea from "../TextArea";
import ListaOpciones from "../ListaOpciones";

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

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

const BotonesContainer = styled.div`
    width: 100%;
    padding-top: 1em;

    display: flex;
    justify-content: space-around;
    align-items: center;

    input{
        width: 10em;
        height: 3em;
        background-color: transparent;
        color: var(--White);
        border: 3px solid var(--Blue);
        border-radius: 15px;
        box-shadow: 0 0 20px var(--Blue);

        font-family: var(--FontBold);
        font-size: 20px;

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

    const [titulo, setTitulo] = useState("");
    const [equipo, setEquipo] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        if(videoSeleccionado != null){
            setTitulo(videoSeleccionado.titulo);
            setEquipo(videoSeleccionado.categoria);
            setImagen(videoSeleccionado.imagen);
            setVideo(videoSeleccionado.video);
            setDescripcion(videoSeleccionado.descripcion);
        }
    },[videoSeleccionado]);

    let contenido = {
        titulo: titulo,
        categoria: equipo,
        imagen: imagen,
        video: video,
        descripcion: descripcion
    } 

    return (
        modalAbierto &&
        <>
            <Overlay/>
            <DialogEstilizado open={true} $mitadY={window.scrollY}>
                <img src={iconCerrar} onClick={() => EditCerrado()}/>
                <h2>Editar Card</h2>
                <form method="dialog">
                    <Campo titulo={"Titulo"} value={titulo} set={setTitulo} required={true}/>
                    <ListaOpciones titulo={"Equipo"} categoria={equipo} set={setEquipo} />
                    <Campo titulo={"Imagen"} type="url" value={imagen} set={setImagen} required={true}/>
                    <Campo titulo={"Video"} type="url" value={video} set={setVideo} required={true}/>
                    <TextArea titulo={"Descripción"} value={descripcion} set={setDescripcion} required={true}/>
                    <BotonesContainer>
                        <input 
                            style={{backgroundColor:"var(--Black)"}} 
                            type="submit" 
                            value="Guardar"
                            onClick={e =>{
                                e.preventDefault();
                                EditarContenido(contenido);
                            }}
                        />
                        <input type="reset" value="Limpiar"/>
                    </BotonesContainer>
                </form>
            </DialogEstilizado>
        </>
    )
}

export default ModalEdit;