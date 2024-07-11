import styled from 'styled-components';
import banner from './banner.png';
import player from './player.png';

const BannerEstilizado = styled.div`
    width: 100%;
    height: 80vh;

    background-image: url(${banner});
    background-position: center;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const ContainerBanner = styled.div`
    width: 90%;

    display: flex;
`;

const Info = styled.div`
    width: 100%;
    color: var(--White);
    
    font-weight: 600;
    
    h2{
        display: inline-block;
        font-family:var(--Bold);
        font-size: 2.2em;
        text-transform: uppercase;
    
        background-color: var(--FrontEnd);
        padding: 0.5em 1em;
        border-radius: 20px;
    }

    h3{
        font-size: 2em;
        margin: 0 0 1em 0;
    }

    p{
        font-size: 1.2em;
        line-height: 1.5em;
    }
`;


function Banner(){
    return(
        <BannerEstilizado>
            <ContainerBanner>
                <Info>
                    <h2>Front End</h2>
                    <h3>Challenge React</h3>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </Info>
                <img src={player} alt="Player"/>
            </ContainerBanner>
        </BannerEstilizado>
    )
}

export default Banner;