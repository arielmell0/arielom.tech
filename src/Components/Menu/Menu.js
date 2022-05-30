import styled from "styled-components";
import 'animate.css';

const Menu = () => {
    return (
        <Header className='menu'>
            <MenuList>
                <ListItem>Home</ListItem>
                <ListItem>Sobre mim</ListItem>
                <ListItem>Projetos</ListItem>
                <ListItem>Contato</ListItem>
            </MenuList>
        </Header>
    )
};

const Header = styled.div`
    width: 100vw;
    height: 10vh;

    padding: 0;
    margin: 0;

    background-color: black;
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: center;

    height: 10vh;
    width: 100vw;
    padding: 0;
    margin: 0;
`

const ListItem = styled.li`
    margin: 1.5rem;
    color: white;
    font-weight: bold;

    list-style-type: none;
    cursor: pointer; 

    &:hover {
        color: #26DB66;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
`

export default Menu;