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
    margin: 1rem;

    :hover {
      color: var(--fontRedEmphasis);
      background-color: #000;
    }
  }
`;
export const Wrapper2 = styled.nav`
  background-color: #000;
  width: 100%;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 1.4rem;
  color: white;
  letter-spacing: 0.2em;
  background-color: #000;
  div {
    color: #fff;
    font-weight: bold;
  }
  a {
    margin: 1rem;
    margin-top: 2.5rem;
    :hover {
      color: var(--fontRedEmphasis);
      background-color: #000;
    }
  }
`;
export const Logo = styled.img`
  width: 150px;
  height: 130px;
  margin-top: 1rem;
  margin-left: 4rem;
`;
export const Logo2 = styled.img`
  width: 13%;
  height: 13%;
  margin-top: 1.5rem;
`;
export const Logo3 = styled.img`
  width: 20%;
  height: 20%;
`;
