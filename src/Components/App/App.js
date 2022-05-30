import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import './App.css';

function App() {
  return (
    <>
      

      <Container>
        <Menu />
        <ProfilePic />
        <Resume />
      </Container>
    </>      
    
  );
}

export default App;