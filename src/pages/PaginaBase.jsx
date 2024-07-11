import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import GlobalStyle from "../Components/GlobalStyles/GlobalStyles";

const Container = styled.div`
    width: 100%;
`;

function PaginaBase() {
    return (
        <>
            <GlobalStyle/>
            <main>
                <Header/>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </>
    )
}

export default PaginaBase;