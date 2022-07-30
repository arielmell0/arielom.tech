import styled from "styled-components";
import 'animate.css';

const Menu = () => {
    return (
        <Header className='menu'>
            <ListItem>Sobre</ListItem>
            <ListItem>Projetos</ListItem>
            <ListItem>Contato</ListItem>
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

    list-style-type: none;
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