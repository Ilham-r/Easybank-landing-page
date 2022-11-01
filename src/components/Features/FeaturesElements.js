import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  z-index: -30;
  justify-content: center;
  align-items: center;
  background-color: hsl(220, 16%, 96%);
  @media screen and (max-width: 375px) {
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 375px) {
    width: 90%;
    height: 100%;
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 300;
  color: hsl(233, 26%, 24%);
`;
export const SubTitle = styled.p`
  color: hsl(233, 8%, 62%);
  margin-top: -30px;
  margin-bottom: 50px;
`;

export const CardWrapp = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  width: 23.2%;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 100%;
    align-self: center;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 375px) {
    align-self: center;
  }
`;
export const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: hsl(233, 26%, 24%);
  font-weight: 400;
  padding-top: 10px;
`;
export const CardContent = styled.p`
  font-size: 0.92rem;
  color: hsl(233, 8%, 62%);
`;
