import styled from "styled-components";
import { BG, BGMobile } from "../../images";

export const Container = styled.header`
  width: 100%;
  height: 90vh;
  top: -80px;
  display: flex;
  justify-content: flex-end;
  background: hsl(0, 0%, 98%);
  z-index: -2;

  @media screen and (max-width: 375px) {
    height: 120vh;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  @media screen and (max-width: 375px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 20px;
  @media screen and (max-width: 375px) {
    text-align: center;
    align-items: center;
    padding: 20px 10px;
  }
`;
export const Title = styled.h1`
  font-size: 2.9rem;
  color: hsl(233, 26%, 24%);
  font-weight: 300;
  @media screen and (max-width: 375px) {
    font-size: 2.4rem;
    align-self: center;
  }
`;
export const SubContent = styled.p`
  margin-top: -10px;
  color: hsl(233, 8%, 62%);
  margin-bottom: 30px;
`;
export const ImageContainer = styled.div`
  width: 70%;
  top: -20px;
  position: relative;
  display: flex;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: left;

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
    background-image: url(${BGMobile});
    justify-content: center;
    align-items: center;
  }
`;
export const HeroImage = styled.img`
  position: absolute;
  width: 93%;
  height: 150%;
  top: -90px;
  right: -120px;
  z-index: 0;

  @media screen and (max-width: 375px) {
    right: 10%;
    height: 135%;
    width: 80%;
    top: -90px;
  }
`;
