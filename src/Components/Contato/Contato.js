import styled from "styled-components";
import { Container } from "../Container/Container";
import { TwitterButton, InstagramButton, LinkedinButton, GithubButton } from '../SocialButtons/SocialButtons';

const SocialContainer = styled(Container)`
    height: 20vh;
    padding: 0;
    flex-direction: row;
`;

const ContatoContainer = styled(Container)`
    flex-direction: row;
    padding: 0;
    height: 70vh;

    @media(max-width: 400px) {
        flex-direction: column;
    }
`;

const TextoContato = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.2em;

    @media(max-width: 600px) {
        font-size: 1em
    }

    @media(max-width: 400px) {
        font-size: .8em
    }
`;

const FotoDoFeio = styled.img`
    margin: 2.5% 2.5%;

    @media(max-width: 600px) {
        width: 200px;
        height: 200px;
        margin-bottom: 10%;
    }
`;

const Contato = () => {
    return (
        <div id='contato'>
            <ContatoContainer>
                <FotoDoFeio src="https://i.ibb.co/HC4kBcs/IMG-20221005-211831.jpg"
                width="296,66" height="400" alt="foto do autor"/>
                <TextoContato>
                    Você pode entrar em contato comigo pelas minhas redes sociais,<br/> fique a vontade
                    para fazer perguntas,<br/> trocar conhecimento ou apenas socializar!
                </TextoContato>
            </ContatoContainer>
            <SocialContainer>
                <TwitterButton href='https://twitter.com/Hellodarknes0' target='_blank'> Twitter </ TwitterButton>
                <InstagramButton href='https://www.instagram.com/arielmell0/' target='_blank'> Instagram </ InstagramButton>
                <GithubButton href='https://github.com/arielmell0' target='_blank'> Github </ GithubButton>
                <LinkedinButton href='https://www.linkedin.com/in/arielmell0/' target='_blank'> Linkedin </LinkedinButton>
            </SocialContainer>
        </div>
    )
}

export default Contato;