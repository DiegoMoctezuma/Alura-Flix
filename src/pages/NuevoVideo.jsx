import styled from "styled-components";
import FormNuevoVideo from "../Components/FormNuevoVideo";


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

`;

function NuevoVideo() {
    return (
        <Container>
            <h2>Nuevo Video</h2>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <FormNuevoVideo/>
        </Container>
    )
}

export default NuevoVideo;