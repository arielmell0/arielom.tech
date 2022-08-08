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
`;

const TextoContato = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.2em;
`;

const FotoDoFeio = styled.img`
    margin: 2.5% 2.5%;

    @media(max-width: 600px) {
        width: 200px;
        height: 200px;
    }
`;

const Contato = () => {
    return (
        <div id='contato'>
            <ContatoContainer>
                <FotoDoFeio src="https://scontent.fccm3-1.fna.fbcdn.net/v/t39.30808-6/289458139_781640299877846_8545634811128899646_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF-20ht10mEXZHrepwwxSvpVHF0ZXzKR81UcXRlfMpHzbqzd8waURDrRxyFAZTDRY5i4g0ODfOQfNERMWoD00cn&_nc_ohc=pXnYGsi_C0MAX-wyK6G&tn=Z_eLk0aLw7oklqaT&_nc_ht=scontent.fccm3-1.fna&oh=00_AT9GQgQL475IH_00eBMSgs-OtBFjSg4UT9l571jpFqGuNg&oe=62F59A77"
                width="400" height="400" alt="foto do autor"/>
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