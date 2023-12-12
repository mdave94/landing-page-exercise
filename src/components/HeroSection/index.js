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
                <HeroH1> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </HeroH1>
                <HeroP>
                Cras pharetra varius est. Donec tortor ex, imperdiet eu urna ut, ultricies sodales turpis. Ut pretium sollicitudin scelerisque

                </HeroP>
                <HeroBtnWrapper>
                    <Button big="true"  fontbig="true" primary ="true" dark="true" to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Details {hover ? <ArrowForward/> : <ArrrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>



    )
}

export default HeroSection