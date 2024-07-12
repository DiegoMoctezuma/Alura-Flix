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
`;

function Home(){

    const { equipos } = useContext(GlobalContext);

    return (
        <Container>
            <Banner/>
            <ContainerEquipos>
                {
                    equipos.map(equipo => (
                        <Equipo key={equipo.id} equipo={equipo}/>
                    ))
                }
            </ContainerEquipos>
            <ModalEdit/>
        </Container>
    )
}

export default Home;
