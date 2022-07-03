import { dblClick } from "@testing-library/user-event/dist/click";
import styled from "styled-components";

const CardButton = (props) => {
    return (
        
            <Button href={props.Link} target='_blank'>
                <textButton>
                    {props.Name}
                </textButton>
            </Button>  
        
    )
};

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

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

    text-decoration: none;
    color: black;
    text-align: center;
    line-height : 50px;
`

export default CardButton;