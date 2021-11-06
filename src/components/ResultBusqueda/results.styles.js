import styled from "styled-components";

export const Container = styled.div`
  margin 10px 80px;
`;

export const searchWrapper = styled.div`
  width: 80%;
`;

export const TitleBusq = styled.h2`
  margin-top:80px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.5rem;
`;

export const ResultItem = styled.div`
  padding: 1rem;
  margin: 20px 0 0 20px;
  display: flex;
  justify-content: space-between;
  :hover{
    border: 1px solid #ffffff;
    border-radius: 10px;
    transition: 0.3s;
  }
  
  h3{ 
    font-family: "Roboto", sans-serif;
    color: red;
    font-size: 1.3rem;
    font-weight: bold;
  }
  span {
    color: gray;
  }
  h4{
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;