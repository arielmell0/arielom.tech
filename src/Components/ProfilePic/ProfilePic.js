import { useState } from 'react';
import 'animate.css';
import Loading from '../Loading/Loading'
import { useEffect } from 'react';
import ProfilePicIlustraded from '../ProfilePicIlustrated/ProfilePicIlustrated'
import ProfilePicReal from '../profilePicReal/ProfilePicReal'

const ProfilePic = () => {
    const [image, setImage] = useState('loading');
    const [animation, setAnimation] = useState('zoomIn');

    const addAnimationAndAlterImage = () => {
        setAnimation('zoomOut')
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage('ProfilePicReal')
        }, 1000)

    };

    const rmAnimationAndAlterImage = () => {
        setAnimation('zoomOut')
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage('ProfilePicIlustraded')
        }, 1000)
    };

    const firstImageAfterRender = () => {
        setTimeout(() => {
            setAnimation('zoomIn');
            setImage('ProfilePicIlustraded')
        }, 1000)
    };

    const changeImage = () => {
        if (image === 'ProfilePicIlustraded') {
            setAnimation(addAnimationAndAlterImage)
        }

        if (image === 'ProfilePicReal') {
            setAnimation(rmAnimationAndAlterImage)
        }
    }

    useEffect(() => {
        setImage(firstImageAfterRender)
    }, [])

    return (
        {
            if(image = 'ProfilePicReal') => 
            
        }
    )
}

export default ProfilePic;