import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 100%);
  background: hsl(233, 26%, 24%);
  @media screen and (max-width: 375px) {
    height: 100%;
    padding: 50px 0;
  }
`;
export const ContentWrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-start;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 140px;
  height: 18px;
  display: flex;
  margin-bottom: 60px;
  @media screen and (max-width: 375px) {
    margin-bottom: 30px;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
`;
export const Icons = styled.img`
  width: 20px;
  height: 20px;
  padding: 8px;
  cursor: pointer;
`;

export const Linkswrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: auto;
  @media screen and (max-width: 375px) {
    width: 100%;
    align-items: center;
  }
`;

export const Link = styled.p`
  font-size: 0.8rem;
  cursor: pointer;
  :hover {
    color: hsl(136, 65%, 51%);
  }
`;
export const Rights = styled.p`
  font-size: 0.95rem;
  color: hsl(233, 8%, 62%);
  margin-top: 30px;
`;
