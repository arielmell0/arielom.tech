import styled from "styled-components";
import CardButton from '../CardButton/CardButton';
import CardContent from '../CardContent/CardContent';


const Card = () => {
    const cardContentArray = [
        {
            content: 'Projeto de uma API responsável por cadastrar um usuário, criptografar sua senha no banco de dados, e devolver um token para acessar certas informações.',
            name: 'API JWT  NodeJS' 
        },
        {
            content: 'Uma API que possui as funcionalidades de um CRUD (Create, Read, Update and Delete)',
            name: 'API CRUD NodeJS'
        },
        {
            content: 'Gera senhas aleatórias de qualquer tamanho. A aleatoriedade das senhas geradas as fazem difíceis de serem adivinhadas.',
            name: 'Gerador de senhas'
        },
    ]

    return (
       <CardContainer>
           <CardItem>
                <CardContent Text={cardContentArray[0].content} />
                <CardButton Name={cardContentArray[0].name} />
           </CardItem>
           <CardItem>
                <CardContent Text={cardContentArray[1].content} />
                <CardButton Name={cardContentArray[1].name} />
           </CardItem>
           <CardItem>
                <CardContent Text={cardContentArray[2].content} />
                <CardButton Name={cardContentArray[2].name} />
           </CardItem>
       </CardContainer> 
    )
};

const CardItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 40vh;
    width: 15vw;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    margin-top: 2.5vh;
    border-radius: 10%;
    background-color: #26DB66;

    @media (max-width: 900px) {
        width: 60%;
        margin-right: 0;
        margin-top: 2.5vh;

    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export default Card;