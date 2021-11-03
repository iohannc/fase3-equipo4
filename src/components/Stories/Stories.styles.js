import styled from 'styled-components';

export const StoriesS = styled.div`
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
  margin-bottom: -30px;
  h1 {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: #fff;
    font-size: 1rem;
  }
`;
export const SideHistories2 = styled.div`
display: flex;
flex-direction: column;
width: 95%;
margin:10px;
margin-right: 2.5%;  
margin-left: 2.5%;
margin-top: 0;
  padding: 10px 30px 20px 30px;
  h1 {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: #fff;
    font-size: 1rem;
  }
`;
