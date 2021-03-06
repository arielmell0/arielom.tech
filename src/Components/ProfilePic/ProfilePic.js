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
        }, 1000)
        
    };

    const rmAnimationAndAlterImage = () => {
        setAnimation('zoomOut')
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage(profilePicIlustraded)
        }, 1000)
    };

    return (
        <Img src={image} animation={animation}
        onClick={() => {
            if(image === profilePicIlustraded) {
                setAnimation(addAnimationAndAlterImage)
            }

            if(image === profilePicReal) {
                setAnimation(rmAnimationAndAlterImage)
            }
        }}
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
    animation-duration: 1s;

    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
    }
`

export default ProfilePic;