import { useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import profilePicIlustraded from '../../images/profilePic.png';
import profilePicReal from '../../images/profilePicReal.jpg';

const ProfilePic = () => {
    const [image, setImage] = useState(profilePicIlustraded); 
    const [animation, setAnimation] = useState('zoomIn');

    const addAnimationAndAlterImage = () => {
        setAnimation('zoomOut')
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage(profilePicReal)
        }, 500)
        
    };

    const rmAnimationAndAlterImage = () => {
        setAnimation('zoomOut')
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage(profilePicIlustraded)
        }, 500)
    };

    return (
        <Img src={image} animation={animation}
        onMouseOver={addAnimationAndAlterImage}
        onMouseOut={rmAnimationAndAlterImage}
        />
    )
}

const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    align-self: center;
    margin-top: 2.5vh;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    animation-name: ${props => props.animation};
    animation-delay: 0s;
    animation-duration: 0.5s;

    @media (max-width: 500px) {
        width: 80vw;
        height: 400px;
    }
`

export default ProfilePic;