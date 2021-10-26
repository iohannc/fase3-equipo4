import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
export const Banners = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Creepster", sans-serif;
    text-align: center;
    color: #fff;
  }
`;

export const Categories = styled.div``;
