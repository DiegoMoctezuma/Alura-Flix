import styled from "styled-components";
import Banner from "../Components/Banner";


const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Home(){
    return (
        <Container>
            <Banner/>
        </Container>
    )
}

export default Home;
