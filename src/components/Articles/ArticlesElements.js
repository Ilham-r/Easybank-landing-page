import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 98%);
  @media screen and (max-width: 375px) {
    height: 100%;
  }
`;
export const ArticlesWrap = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 90%;
    height: 100%;
    flex-direction: column;
  }
`;
export const Title = styled.div`
  font-size: 2.75rem;
  font-weight: 300;
  color: hsl(233, 26%, 24%);
  align-self: flex-start;
  padding-left: 10%;
  margin: 80px 0px 40px;
`;
export const Articles = styled.div`
  width: 23.5%;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const ArticleImage = styled.img`
  width: 100%;
  height: 50%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const ArticleContentWrap = styled.div`
  padding: 10px 17px;
  display: flex;
  flex-direction: column;
`;
export const ArticleSubtitle = styled.p`
  font-size: 0.7rem;
  color: hsl(233, 8%, 62%);
`;
export const ArticleTitle = styled.h5`
  color: hsl(233, 26%, 24%);
  font-size: 1rem;
  font-weight: 400;
  margin-top: -7px;
  cursor: pointer;
  :hover {
    color: hsl(136, 65%, 51%);
  }
`;
export const ArticleContent = styled.p`
  font-size: 0.8rem;
  color: hsl(233, 8%, 62%);
  margin-top: -15px;
`;
