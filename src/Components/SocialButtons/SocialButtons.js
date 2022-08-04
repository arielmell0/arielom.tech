import styled from "styled-components";

const SocialButtons = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    width: 15%;
    height: 10%;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 5%;
    border: 5px solid red;
    font-size: 1em;
    margin: 3% 3% 3%;
    padding: 0;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }

    text-decoration: none;
    color: black;
    text-align: center;
    line-height : bold;
`

const TwitterButton = styled(SocialButtons)`
    border: 5px solid blue;
`;

const InstagramButton = styled(SocialButtons)`
    border: 5px solid pink;
`;

const GithubButton = styled(SocialButtons)`
    border: 5px solid gray;
`;

const LinkedinButton = styled(SocialButtons)`
    border: 5px solid darkblue;
`;

export {TwitterButton, InstagramButton, GithubButton, LinkedinButton };