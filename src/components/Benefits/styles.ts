import styled from 'styled-components';
import skinLike from '../../assets/leprechaun/skinLike.png';

export const Container = styled.div`
  padding: 50px 80px;
  @media screen and (max-width: 768px) {
    padding: 20px 40px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ContentCard = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 968px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Card = styled.div`
  background-color: #e5e5e5;
  padding: 1rem;
  border-radius: 7px;
  height: 190px;
  width: 190px;

  @media screen and (max-width: 768px) {
    text-align: center;
    height: 170px;

    p {
      font-size: 14px;
    }
  }

  p {
    font-size: 18px;
  }
`;
export const H2 = styled.b`
  color: var(--primary);
  text-align: justify;
  font-size: 70px;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const SubTitle = styled.p`
  color: var(--text);
  font-size: 26px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Image = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${skinLike});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
