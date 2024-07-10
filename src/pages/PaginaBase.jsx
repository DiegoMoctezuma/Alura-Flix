import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`;

function PaginaBase() {
    return (
        <main>
            <Container>
                <Outlet/>
            </Container>
        </main>
    )
}

export default PaginaBase;