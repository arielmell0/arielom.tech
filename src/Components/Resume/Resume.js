import styled from 'styled-components';
import Typewriter from 'typewriter-effect/dist/core';

const Resume = () => {
    const resume = document.getElementById('resume');
    const typeEffect = new Typewriter(resume, {
        loop: true,
        delay: 75
    })

    typeEffect
        .pauseFor(2500)
        .typeString('A simple yet powerful native javascript')
        .pauseFor(300)
        .deleteChars(10)
        .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
        .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
        .pauseFor(1000)
        .start();

    return (
        <ResumeDiv id="resume">

        </ResumeDiv>
    )
}

const ResumeDiv = styled.div`
    align-self: center;
    justify-self: flex-start;
    background-color: red;
    width: 100vw;
    height: 20vh;
    margin:2.5vh 0 0 0;
    padding: 0;
`

export default Resume;