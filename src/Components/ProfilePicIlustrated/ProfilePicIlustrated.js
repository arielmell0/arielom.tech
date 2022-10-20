import profilePicIlustraded from '../../images/profilePic.png';
import styled from 'styled-components'

const ProfilePicIlustrated = () => (
    <Img src={profilePicIlustraded}/>
)

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

export default ProfilePicIlustrated;