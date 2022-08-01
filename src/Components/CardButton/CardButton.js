import styled from "styled-components";

const CardButton = (props) => {
    return (
        
            <Button href={props.Link} target='_blank'>
                <div>
                    {props.Name}
                </div>
            </Button>  
        
    )
};

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
    height: 25%;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 5%;
    border: none;
    font-size: 1em;

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