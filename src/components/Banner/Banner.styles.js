import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    
  }
`;

export const BannerImage = styled.figure`
  width: 336px;

  img {
    object-fit: cover;
    height: 400px;
  }
`;

export const RightSideBanner = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Creepster", sans-serif;
    text-align: center;
    color: #fff;
    font-size: 6rem;
    letter-spacing: 0.245em;
  }
`;
export const BannerCentered = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5%;
  h1 {
    font-family: "Creepster", sans-serif;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    letter-spacing: 0.27em;
  }
`;

export const Categories = styled.div``;
