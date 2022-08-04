import styled from "styled-components";
import CardButton from '../CardButton/CardButton';
import CardContent from '../CardContent/CardContent';

const Card = () => {
    const cardContentArray = [
        {
            content: 'Projeto de uma API responsável por cadastrar um usuário, criptografar sua senha no banco de dados, e devolver um token para acessar certas informações.',
            name: 'API JWT  NodeJS' ,
            link: 'https://github.com/arielmell0/API_JWT_NodeJS'
        },
        {
            content: 'Uma API que possui as funcionalidades de um CRUD (Create, Read, Update and Delete)',
            name: 'API CRUD NodeJS',
            link: 'https://github.com/arielmell0/API_CRUD'
        },
        {
            content: 'API que consiste em um CRUD de tarefas para o desafio da Mobi+Akross',
            name: 'API Tarefas',
            link: 'https://github.com/arielmell0/Projeto-Mobicare'
        },
        {
            content: 'Gera senhas aleatórias de qualquer tamanho. A aleatoriedade das senhas geradas as fazem difíceis de serem adivinhadas.',
            name: 'Gerador de senhas',
            link: 'https://github.com/arielmell0/Gerador-De-Senhas'
        },
        {
            content: 'Uma urna eletrônica que contém alguns candidatos, projeto criado para treinar alguns conteúdos que li sobre css flexbox e css grid.',
            name: 'Urna eletrônica',
            link: 'https://github.com/arielmell0/Urna-eletronica'
        },
        {
            content: 'Um pequeno e simples chat TCP com NodeJS, utilizando o módulo net nativo do core da plataforma.',
            name: 'Chat TCP simples',
            link: 'https://github.com/arielmell0/chat-TCP'
        },
    ]

    return (
        <div id='projetos'>

            <CardContainer>
                <CardItem>
                        <CardContent Text={cardContentArray[0].content} />
                        <CardButton Name={cardContentArray[0].name} Link={cardContentArray[0].link} />
                </CardItem>
                <CardItem>
                        <CardContent Text={cardContentArray[1].content} />
                        <CardButton Name={cardContentArray[1].name} Link={cardContentArray[1].link} />
                </CardItem>
                <CardItem>
                        <CardContent Text={cardContentArray[2].content} />
                        <CardButton Name={cardContentArray[2].name} Link={cardContentArray[2].link} />
                </CardItem>

                <CardItem>
                        <CardContent Text={cardContentArray[3].content} />
                        <CardButton Name={cardContentArray[3].name} Link={cardContentArray[3].link} />
                </CardItem>
                <CardItem>
                        <CardContent Text={cardContentArray[4].content} />
                        <CardButton Name={cardContentArray[4].name} Link={cardContentArray[4].link} />
                </CardItem>
                <CardItem>
                        <CardContent Text={cardContentArray[5].content} />
                        <CardButton Name={cardContentArray[5].name} Link={cardContentArray[5].link} />
                </CardItem>
            </CardContainer> 
        </div>
    )
};

const CardItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 45%;
    width: 20%;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    margin-top: 2.5vh;
    border-radius: 10%;
    background-color: #26DB66;

    @media (max-width: 700px) {
        width: 60%;
        height: 15%;
        margin-right: 0;
        margin-top: 5%;

    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 90vh;
    background-color: black;
    flex-wrap: wrap;
    padding-top: 10vh;

    @media (max-width: 600px) {
        flex-direction: column;
        height: 260vh;
    }
`

export default Card;