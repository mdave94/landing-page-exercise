import React from 'react'
import { InfoContainer,
        InfoWrapper,
        Column1,
        Column2,
        Img,
        ImgWrap,
        InfoRow,
        TextWrapper,
        Heading,
        BtnWrap,
        TopLine,
        Subtitle
     } from './InfoElements'
import { Button } from '../ButtonElements' 


const InfoSection = ({primary,dark,dark2,lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt}) => {
  return (
    <>
       <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle dark={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                    smoth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0 }
                                    dark = {dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
       </InfoContainer>
    </>
  )
}

export default InfoSection
