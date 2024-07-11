import { Outlet } from "react-router-dom";
import GlobalContextProvider from "../Context/GlobalContext";
import styled from "styled-components";

import Header from "../Components/Header";
import GlobalStyle from "../Components/GlobalStyles/GlobalStyles";
import Footer from "../Components/Footer";

const Container = styled.div`
    width: 100%;
`;

function PaginaBase() {
    return (
        <main>
            <GlobalStyle/>
            <Header/>
            <GlobalContextProvider>
                <Container>
                    <Outlet/>
                </Container>
            </GlobalContextProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase;