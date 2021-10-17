import styled from "styled-components";      

export const Title = styled.div`
display:flex; 
justify-content: ${(props) => props.align==='center'?'center':'left'};
justify-content: center;
margin-top:auto;
        h2{
        display: inline;
        color: white;
        font-size: 1.4rem;
        font-family: 'Pathway Gothic One', sans-serif;
        border-bottom: 1px solid var(--fontRedEmphasis);
        letter-spacing: 0.245em;
        padding-bottom: 3px;
        }
`;
//text-decoration: underline #E41212;