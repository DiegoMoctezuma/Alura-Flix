import styled from "styled-components";
import logo from "/img/Logo.svg";

const FooterEstilizado = styled.footer`
    width: 100%;
    height: 15vh;
    background-color: var(--Black);
    box-shadow: 0 -5px 10px var(--Blue);

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height:40px;
        width: auto;
    }
`;

function Footer(){
    return(
        <FooterEstilizado>
            <img src={logo} alt="Logo de la página"/>
        </FooterEstilizado>
    )
}

export default Footer;