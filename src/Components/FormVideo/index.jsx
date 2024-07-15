import useModalEdit from "../../Hooks/Editar";
import styled from "styled-components";

import Campo from "../Campo";
import TextArea from "../TextArea";
import ListaOpciones from "../ListaOpciones";


const Fieldset = styled.fieldset`
    width: 100%;
    display:flex;
    gap:2em;

    border: none;
    padding: 0;
`;

function FormVideo() {

    const { modalAbierto,videoSeleccionado } = useModalEdit();


    return (
        <>
            <Fieldset>
                <Campo 
                    titulo={"Título"} 
                    objKey={"titulo"} 
                    placeholder={"Ingrese el título"}
                    value={modalAbierto ? videoSeleccionado.titulo : ""}
                />
                <ListaOpciones 
                    titulo={"Categoría"} 
                    objKey={"categoria"}
                    value={modalAbierto ? videoSeleccionado.categoria : "default"}
                />
            </Fieldset>
            <Fieldset>
                <Campo 
                    titulo={"Imagen"} 
                    objKey={"imagen"} 
                    placeholder={"Ingrese el enlace de la imagen"} 
                    type="url"
                    value={modalAbierto ? videoSeleccionado.imagen : ""}
                />
                <Campo 
                    titulo={"Video"} 
                    objKey={"video"} 
                    placeholder={"Ingrese el enlace del video"} 
                    type="url"
                    value={modalAbierto ? videoSeleccionado.video : ""}
                />
            </Fieldset>
            <Fieldset>
                <TextArea 
                    objKey={"descripcion"} 
                    titulo={"Descripción"} 
                    placeholder="¿De qué se trata este vídeo?" 
                    value={modalAbierto ? videoSeleccionado.descripcion : ""}
                />
            </Fieldset>
        </>
    );
}

export default FormVideo;