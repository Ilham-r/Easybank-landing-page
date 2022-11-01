import styled from "styled-components";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 70px;
  justify-content: center;
  background-color: #fff;
`;
export const Logo = styled.img`
  display: flex;
  width: 120px;
  height: 18px;

  justify-self: flex-start;
`;
export const Bars = styled.img`
  display: none;
  @media screen and (max-width: 375px) {
    display: flex;
    width: ${({ click }) => (click ? "18px" : "26px")};

    height: ${({ click }) => (click ? "20px" : "15px")};
    justify-self: flex-end;
    z-index: 100;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 375px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      hsl(0, 0%, 100%)
    );
    top: 54px;
    left: 0px;
    border-radius: 5px;
  }
`;
export const Item = styled.li`
  font-size: 15px;
  padding: 15px;
  align-self: center;
  @media screen and (max-width: 375px) {
    padding: 10px;
    margin-right: 55px;
  }
`;
export const Links = styled(Link)`
  cursor: pointer;
  position: relative;

  color: hsl(233, 8%, 62%);
  transition: 0.3s ease-in-out;
  :hover {
    color: #000;
  }
  :hover::after {
    content: "";
    background-image: linear-gradient(
      to right,
      hsl(136, 65%, 51%),
      hsl(192, 70%, 51%)
    );
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -15px;
    right: 0px;
  }
  @media screen and (max-width: 375px) {
    color: white;
  }
`;
