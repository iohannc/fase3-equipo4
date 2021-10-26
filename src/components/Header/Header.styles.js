import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: #000;
  width: 100%;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.245em;
  background-color: #000;

  a {
    color: #fff;
    margin: 5rem;

    :hover {
      color: var(--fontRedEmphasis);
      background-color: #000;
    }
  }
`;
export const Logo = styled.img`
  width: 220px;
  height: 170px;
  margin: 1.5rem;
  margin-left: 7rem;
`;
export const Logo2 = styled.img`
  width: 13%;
  height: 13%;
  margin-top: 1.5rem;
`;
