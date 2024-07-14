import styled from "styled-components";

import Campo from "../Campo";
import TextArea from "../TextArea";
import ListaOpciones from "../ListaOpciones";

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

const Fieldset = styled.fieldset`
    width: 100%;
    display:flex;
    gap:2em;

    border: none;
    padding: 0;
`;

const BotonesContainer = styled.div`
    width: 100%;
    padding: 1em;

    display: flex;
    gap: 2em;
    align-items: center;

    input{
        width: 10em;
        height: 3em;
        background-color: transparent;
        color: var(--White);
        border: 3px solid transparent;
        border-radius: 15px;

        font-family: var(--FontBold);
        font-size: 20px;
        text-transform: uppercase;

        cursor: pointer;
        transition: 0.4s;

        &:hover{
            border-color: var(--White);
            box-shadow: 0 0 20px var(--White);
        }

    }
`;

function FormNuevoVideo() {
    return (
        <FormContainer>
            <h3>Crear Tarjeta</h3>
            <FormEstilizado>
                <Fieldset>
                    <Campo titulo={"Título"} placeholder={"Ingrese el título"}/>
                    <ListaOpciones titulo={"Categoría"} categoria={"defecto"}/>
                </Fieldset>
                <Fieldset>
                    <Campo titulo={"Imagen"} placeholder={"Ingrese el enlace de la imagen"} type="url"/>
                    <Campo titulo={"Video"} placeholder={"Ingrese el enlace del video"} type="url"/>
                </Fieldset>
                <TextArea titulo={"Descripción"} placeholder="¿De qué se trata este vídeo?" />
                <BotonesContainer>
                        <input 
                            style={{borderColor:"var(--Blue)"}}
                            type="submit" 
                            value="Guardar"
                            onClick={e =>{
                                e.preventDefault();
                                EditarContenido(contenido);
                            }}
                        />
                        <input type="reset" value="Limpiar" style={{borderColor:"var(--White)"}} />
                </BotonesContainer>
            </FormEstilizado>
        </FormContainer>
    );
}

export default FormNuevoVideo;