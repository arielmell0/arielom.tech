import styled from "styled-components";

const CardContent = (props) => {
    return (
        <CardText>
            <div>{props.Text}</div>
        </CardText>
    )
};

const CardText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    height: 70%;
    color: white;
    font-size: 1rem;
`

export default CardContent;