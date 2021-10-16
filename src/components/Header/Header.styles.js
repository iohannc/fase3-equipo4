import styled from "styled-components";

export const Wrapper = styled.nav`
    background-color: #000;
    width:100%;
`;
export const Logo = styled.img`
    width: 220px;
    height: 170px;
    margin-top: 1.5rem;
`;

export const Content = styled.div`
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.245em;
`;

export const NavbarItems = styled.div`
    background-color: #000;
    
    a {
        color: #fff;
        margin: .5rem;

        :hover {
            color: var(--fontRedEmphasis);
            background-color: #000;
        }
    }

`;