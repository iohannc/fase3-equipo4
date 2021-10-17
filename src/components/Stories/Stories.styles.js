import styled from 'styled-components';

export const StoriesS= styled.div`
display: grid;
grid-template-columns: repeat(1,auto);
margin-top:10px;
padding: 20px 0px 30px 0px;
text-align: justify;
h2 {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
  }
p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 0.8rem;
  }
a{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.8rem; 
    :hover{
        color: var(--fontRedEmphasis);
    }
}


`;

export const SideHistories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 10px 90px 20px 60px;
  h1 {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: #fff;
    font-size: 1rem;
  }
`;
