import React from "react";
import {
  Container,
  FormWrap,
  From,
  FromButton,
  FromContent,
  FromH1,
  FromInput,
  FromLabel,
  FromText,
  Icon,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Prince</Icon>
          <FromContent>
            <From action="#">
              <FromH1>Sign in to your account</FromH1>
              <FromLabel htmlFor="for">Email</FromLabel>
              <FromInput type="email" required />
              <FromLabel htmlFor="for">Password</FromLabel>
              <FromInput type="password" required />
              <FromButton type="submit">Continue</FromButton>
              <FromText>Forgot password</FromText>
            </From>
          </FromContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
