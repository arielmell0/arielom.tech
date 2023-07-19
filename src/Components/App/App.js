import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import Card from '../Card/Card';
import Contato from '../Contato/Contato';
import GlobalStyle from '../../globalStyles';
import './App.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {
  const initializeGa = () => {
    ReactGA.initialize('G-XD31VDXNS6');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  useEffect(() => {
    initializeGa()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Menu />
      
      <Container id='sobre'>
        <ProfilePic />
        <Resume />
      </Container>

      <Card id='projetos'/>


      <Contato id='contato' />
    </>      
  );
}

export default App;