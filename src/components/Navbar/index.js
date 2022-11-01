import React, { useState } from "react";
import {
  Item,
  Links,
  Logo,
  Nav,
  NavContainer,
  NavMenu,
  Bars
} from "./NavbarElements";
import { Log, Hamburger, Close } from "../../images";
import { Button } from "../Button";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src={Log} alt="easy bank" />
          <Bars
            src={click ? Close : Hamburger}
            alt="hamburger icon"
            onClick={handleClick}
            click={click}
          />
          <NavMenu click={click}>
            <Item>
              <Links to="/">Home</Links>
            </Item>
            <Item>
              <Links to="#">About</Links>
            </Item>
            <Item>
              <Links to="#">Contact</Links>
            </Item>
            <Item>
              <Links to="#">Blog</Links>
            </Item>
            <Item>
              <Links to="#">Career</Links>
            </Item>
          </NavMenu>
          <Button>Request Invite</Button>
        </NavContainer>
      </Nav>
    </>
  );
}
