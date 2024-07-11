import styled from "styled-components";
import Card from "../Card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Container = styled.section`
    width: 90%;
    height: 75vh;
    padding: 0 0 5em 0;
`;

const TituloEquipo = styled.h2`
    display: inline-block;

    color: var(--White);
    padding: 0.5em 2em;
    border-radius: 15px;

    font-size: 2em;
`;

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 0 0 2em 0;

    overflow: scroll;
    &::-webkit-scrollbar{
        background-color: transparent;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.$color};
        border-radius: 10px;
    }
    &::-webkit-scrollbar-corner{
        background-color: transparent;
    }
`;

function Equipo({equipo}){

    const { videos } = useContext(GlobalContext);

    return(
        <Container>
            <TituloEquipo style={{backgroundColor:equipo.color}} >{equipo.titulo}</TituloEquipo>
            <CardsContainer $color={equipo.color}>
                {
                    videos.map(video => {
                        if(video.categoria === equipo.titulo){
                            return <Card key={video.id} color={equipo.color} video={video}/>
                        }
                    })
                }
            </CardsContainer>
        </Container>
    )
}

export default Equipo;