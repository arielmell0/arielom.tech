import styled from "styled-components";

const Card = () => {
    return (
       <CardContainer>
           <CardItem></CardItem>
           <CardItem></CardItem>
           <CardItem></CardItem>
       </CardContainer> 
    )
};

const CardItem = styled.div`
    height: 40vh;
    width: 15vw;
    margin: 5vw;
    border-radius: 10%;
    background-color: red;
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Card;