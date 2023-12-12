import React from 'react'
import { Container,
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        Text} from './SigningElements'


const SignIn = () => {
  return (
    <>   
     
      <Container>
       
        <FormWrap>
          <Icon to="/" >MD</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Form text </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type="email"/>
              <FormLabel htmlfor='for'>Password</FormLabel>
              <FormInput type="password"/>
              <FormButton type="">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
