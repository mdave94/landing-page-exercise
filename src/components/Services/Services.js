import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'

import { ServicesContainer,
        ServicesH1,
        ServicesH2,
        ServicesCard,ServicesIcon,
        ServicesP,
        ServicesWrapper,
} from './ServiceElements'





const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Text for services</ServicesH2>
                <ServicesP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend, 
                felis porttitor condimentum lobortis, quam dui dapibus tellus, eget dictum tortor 
                ipsum eget diam. 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Text2 for services</ServicesH2>
                <ServicesP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend, 
                felis porttitor condimentum lobortis, quam dui dapibus tellus, eget dictum tortor 
                ipsum eget diam. 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Text3 for services3</ServicesH2>
                <ServicesP>
                uam dui dapibus tellus, eget dictum tortor 
                ipsum eget diam. psum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend, 
                felis porttitor condimentum lobortis, q
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
