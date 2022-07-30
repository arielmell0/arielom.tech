import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import Card from '../Card/Card';
import { CardContainer } from '../CardContainer.js/CardContainer';
import GlobalStyle from '../../globalStyles';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container id='sobre'>
        <Menu />
        <ProfilePic />
        <Resume />
      </Container>

      <CardContainer id='projetos'>
        <Card />
      </CardContainer>
    </>      
  );
}

export default App;