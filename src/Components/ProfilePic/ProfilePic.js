import { useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import profilePicIlustraded from '../../images/profilePic.png';
import profilePicReal from '../../images/profilePicReal.jpg';

const ProfilePic = () => {
    let [image, setImage] = useState(profilePicReal); 
    const [animation, setAnimation] = useState(ImgAnimationOut);

    const addAnimationAndAlterImage = () => {
        setImage(profilePicIlustraded);
        setAnimation(ImgAnimationIn);
    };

    const rmAnimationAndAlterImage = () => {
        setImage(profilePicReal);
        setAnimation(ImgAnimationOut);
    }

    return (
        <ImgAnimationOut src={image} onMouseOver={addAnimationAndAlterImage}
        onMouseOut={rmAnimationAndAlterImage}
        />
    )
}

const ImgAnimationOut = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    align-self: center;
    margin-top: 2.5vh;
    width: 500px;
    height: 500px;
    border-radius: 50%;
`

const ImgAnimationIn = styled(ImgAnimationOut)`
    animation-name: flash;
    animation-duration: 1s;
    animation-iteration-count: infinite;
`

export default ProfilePic;