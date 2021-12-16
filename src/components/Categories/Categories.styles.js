import styled from 'styled-components';

export const CategoriesS= styled.div`
    display: grid;
    grid-template-columns: repeat(5,auto);
    margin-top:auto;
    a{
        color: white;
        font-family: 'Roboto', sans-serif;
        text-align:center;
        :hover{
            color: var(--fontRedEmphasis);
            transition: 0.5s;
        }
    }
`;