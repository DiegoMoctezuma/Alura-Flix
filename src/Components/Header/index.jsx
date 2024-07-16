import styled from "styled-components";
import logo from "/img/Logo.svg"
import BotonTexto from "../BotonTexto";

const HeaderEstilizado = styled.header`
    width: 100%;
    height: 20vh;

    display: flex;
    align-items: center;

    background-color:var(--Black);
    box-shadow: 0 -5px 10px var(--Blue);


    img{
        height: 40px;
        width: auto;
    }

    @media (max-width: 1024px){
        height: 10vh;
    }

    @media (max-width: 768px){
        height: 8vh;
        position: fixed;

        img{
            display: none;
        }
    }
`;

const Container =  styled.div`
    width: 100%;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        justify-content: center;
    }
`;

const ContainerBotones = styled.div`
    display: flex;
    gap: 1rem;
`;

function Header(){
    return(
        <HeaderEstilizado>
            <Container>
                <img src={logo}/>
                <ContainerBotones>
                    <BotonTexto texto="Home" activo={true}/>
                    <BotonTexto texto="Nuevo Video" activo={false} to="nuevo"/>
                </ContainerBotones>
            </Container>
        </HeaderEstilizado>
    )
}

export default Header;