import styled from "styled-components";
import 'animate.css';

const Menu = () => {
    return (
        <Header className='menu'>
            <ListItem href="#sobre">Sobre</ListItem>
            <ListItem href="#projetos">Projetos</ListItem>
            <ListItem href="#contato">Contato</ListItem>
        </Header>
    )
};

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 10vh;

    padding: 0;
    margin: 0;

    background-color: black;
`

const ListItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0;
    text-decoration: none;
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    font-family: Roboto, sans-serif;

    cursor: pointer;

    margin: 3vw;

    &:hover {
        color: #26DB66;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
        margin: 4vw;
    }

    @media (max-width: 500px) {
        margin: 6vw;
    }
`

export default Menu;