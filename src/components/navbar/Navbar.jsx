import React from "react";
import {
  Container,
  Navcontainer,
  NavIcon,
  NavButton,
} from "../styles/NavbarStyled";

const Navbar = () => {
  return (
    <Container>
      <Navcontainer>
        <NavIcon>Bookingish</NavIcon>
        <div>
          <NavButton>Register</NavButton>
          <NavButton teal>Login</NavButton>
        </div>
      </Navcontainer>
    </Container>
  );
};

export default Navbar;
