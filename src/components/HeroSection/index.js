import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import {HeroContainer,
        HeroBg,
        VideoBG,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrrowRight,


} from './HeroElements'    


const HeroSection = () =>{
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBG autoPlay loop muted src={Video} type ='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Teszt oldalt megjelenítő szöveg </HeroH1>
                <HeroP>
                    Bekezdéshez szöveg a megjelenítés teszteléséhez. 

                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        REgisztrálás {hover ? <ArrowForward/> : <ArrrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>



    )
}

export default HeroSection