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
    height: 20%;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 5%;
    border: none;
    font-size: 1rem;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

export default CardButton;