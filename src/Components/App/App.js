import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import Card from '../Card/Card';
import { CardContainer } from '../CardContainer.js/CardContainer';
import './App.css';

function App() {
  return (
    <>
      

      <Container>
        <Menu />
        <ProfilePic />
        <Resume />
      </Container>

      <CardContainer>
        <Card />
      </CardContainer>
    </>      
    
  );
}

export default App;