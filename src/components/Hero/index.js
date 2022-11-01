import {
  Container,
  ContentContainer,
  ContentWrap,
  ImageContainer,
  Title,
  Wrapper,
  SubContent,
  HeroImage
} from "./HeroElements";
import { Button } from "../Button";
import { Mockups } from "../../images";
export default function Hero() {
  return (
    <>
      <Container>
        <Wrapper>
          <ContentContainer>
            <ContentWrap>
              <Title> Next generation digital banking</Title>
              <SubContent>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </SubContent>
              <Button Hero>Request Invite </Button>
            </ContentWrap>
          </ContentContainer>

          <ImageContainer>
            <HeroImage src={Mockups} alt="mockups" />
          </ImageContainer>
        </Wrapper>
      </Container>
    </>
  );
}
