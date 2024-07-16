import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import styled from "styled-components";
import Banner from "../Components/Banner";
import Equipo from "../Components/Equipo";
import ModalEdit from "../Components/ModalEdit";


const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerEquipos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--DarkGrey);

    @media (max-width: 768px){
        padding: 2rem 0;
    }
`;

function Home(){

    const { state } = useContext(GlobalContext);

    return (
        <Container>
            <Banner/>
            <ContainerEquipos>
                {
                    state.equipos.map(equipo => (
                        <Equipo key={equipo.id} equipo={equipo}/>
                    ))
                }
            </ContainerEquipos>
            <ModalEdit/>
        </Container>
    )
}

export default Home;
