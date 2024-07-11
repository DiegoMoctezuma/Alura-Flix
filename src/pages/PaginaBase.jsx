import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import GlobalStyle from "../Components/GlobalStyles/GlobalStyles";
import Footer from "../Components/Footer";

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
                <Footer/>
            </main>
        </>
    )
}

export default PaginaBase;