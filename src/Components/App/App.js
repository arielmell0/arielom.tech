import Menu from '../Menu/Menu';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Container } from '../Container/Container';
import Resume from '../Resume/Resume';
import Card from '../Card/Card';
import SocialButtons from '../SocialButtons/SocialButtons';
import { ContatoContainer } from '../ContatoContainer/ContatoContainer';
import { TwitterButton, InstagramButton, LinkedinButton, GithubButton } from '../SocialButtons/SocialButtons';
import GlobalStyle from '../../globalStyles';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      
      <Container id='sobre'>
        <ProfilePic />
        <Resume />
      </Container>

      <Card id='projetos'/>

      <ContatoContainer id='contato'>
        <LinkedinButton href='https://www.linkedin.com/in/arielmell0/' target='_blank'> Linkedin </LinkedinButton>
        <TwitterButton href='https://twitter.com/Hellodarknes0' target='_blank'> Twitter </ TwitterButton>
        <InstagramButton href='https://www.instagram.com/arielmell0/' target='_blank'> Instagram </ InstagramButton>
        <GithubButton href='https://github.com/arielmell0' target='_blank'> Github </ GithubButton>
      </ContatoContainer>
    </>      
  );
}

export default App;