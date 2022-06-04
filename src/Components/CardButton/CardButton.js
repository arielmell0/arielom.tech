import styled from "styled-components";

const CardButton = (props) => {
    return (
        <Button>
           {props.Name}
        </Button>
    )
};

const Button = styled.button`
    width: 60%;
    height: 15%;
    background-color: white;
    border-radius: 5%;
    margin-bottom: 5%;
    border: none;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

export default CardButton;