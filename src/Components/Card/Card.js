import styled from "styled-components";
import CardButton from '../CardButton/CardButton';

const Card = () => {
    return (
       <CardContainer>
           <CardItem>
               <CardButton Name="Github"/>
           </CardItem>
           <CardItem>
               <CardButton Name="Linkedin"/>
           </CardItem>
           <CardItem>
               <CardButton Name="Twitter"/>
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
    margin-right: 3vw;
    margin-bottom: 5vw;
    border-radius: 10%;
    background-color: #26DB66;

    @media (max-width: 900px) {
        width: 60%;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2.5vh;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export default Card;