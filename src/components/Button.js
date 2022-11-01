import styled from "styled-components";

export const Button = styled.div`
  padding: 10px 20px;
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%),
    hsl(192, 70%, 51%)
  );
  border-radius: 20px;
  color: hsl(0, 0%, 100%);
  font-size: 15px;
  margin-left: 0;
  text-align: ${({ Footer }) => (Footer ? "center" : "none")};
  align-self: ${({ Footer }) => (Footer ? "flex-end" : "none")};
  width: ${({ Footer }) => (Footer ? "120px" : "none")};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 375px) {
    display: ${({ Hero }) => (Hero ? "flex" : "none")};
    align-self: ${({ Footer }) => (Footer ? "center" : "none")};
  }
`;
