import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import Card from '../Card/Card';
import './App.css';

function App() {
  return (
    <>
      <Menu />

      <Container>

        <ProfilePic />
        <Resume />
      </Container>

      <Card />
    </>      
    
  );
}

export default App;