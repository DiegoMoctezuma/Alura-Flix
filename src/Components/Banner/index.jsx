import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

import styled from 'styled-components';
import banner from './banner.png';


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

    
    img{
        width: 70%;
        max-height: 300px;
        border-radius: 15px;
        border: 5px solid ${props => props.$color};
        box-shadow: 0 0 10px 5px ${props => props.$color};
    }
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
    
        background-color: ${props => props.$color};
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
        width: 80%;
    }
`;


function Banner(){

    const { randomVideo } = useContext(GlobalContext);
    let color = "";
    switch(randomVideo.categoria){
        case "Front End":
            color = "var(--FrontEnd)";
            break;
        case "Back End":
            color = "var(--BackEnd)";
            break;
        case "Innovación y gestión":
            color = "var(--Innovacion)";
            break;
        default:
            color = "var(--FrontEnd)";
    }

    return(
        <BannerEstilizado>
            <ContainerBanner $color={color}>
                <Info $color={color}>
                    <h2>{randomVideo.categoria}</h2>
                    <h3>{randomVideo.titulo}</h3>
                    <p>{randomVideo.descripcion}</p>
                </Info>
                <img src={randomVideo.imagen} alt="Player"/>
            </ContainerBanner>
        </BannerEstilizado>
    )
}

export default Banner;