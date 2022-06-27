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


const InfoSection = () => {
  return (
    <>
       <InfoContainer >
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Top line text</TopLine>
                            <Heading>HEDAER</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home">Button</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2><ImgWrap>
                            <Img/>
                        </ImgWrap></Column2>
                </InfoRow>
            </InfoWrapper>
       </InfoContainer>
    </>
  )
}

export default InfoSection
