import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Resume = () => {
    return (
        <ResumeDiv>
            <Typewriter
            options={{
                strings: ['Olá! Me chamo Ariel Oliveira de Mello.',
                'Tenho 20 anos de idade.', 'Resido no estado do Rio Grande do Sul'
            ],
                deleteSpeed: 30,
                delay: 30,
                autoStart: true,
                loop: true,
            }}
            />
        </ResumeDiv>
    )
};

const ResumeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: flex-start;
    background-color: white;
    width: 100vw;
    height: 6.401vh;
    margin: 2.5vh 0 0 0;
    padding: 0;

    color: black;
    font-weight: italic;
    font-size: 2rem;
    text-align: center;
`

export default Resume;