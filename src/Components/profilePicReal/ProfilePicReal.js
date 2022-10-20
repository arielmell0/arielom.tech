import profilePicReal from '../../images/profilePicReal.jpg';
import styled from 'styled-components'

const ProfilePicReal = () => (
    <Img src={profilePicReal}/>
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

export default ProfilePicReal;