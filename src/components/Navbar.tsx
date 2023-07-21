import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 5rem;
  background-color: #004358d5;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;

  ul {
    gap: 3rem;
    display: flex;
    list-style: none;
    padding: 0;
  }

  @media (min-width: 992px) {
    justify-content: end;
  }
`;

export default Navbar;
