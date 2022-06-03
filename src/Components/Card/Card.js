import styled from "styled-components";

const Card = () => {
    return (
       <CardContainer>
           <CardItem />
           <CardItem />
           <CardItem />
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
    margin: 3vw;
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

    @media (max-width: 900px) {
        flex-direction: column;]
    }
`

export default Card;