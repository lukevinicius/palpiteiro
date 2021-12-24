import styled from 'styled-components';
import skinLike from '../../assets/leprechaun/skinLike.png';

export const Div = styled.div`
  padding: 50px 0px 50px 80px;
  background: var(--shape);
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;
export const Card = styled.div`
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 7px;
  height: 190px;
  width: 190px;
`;
export const DivCol = styled.div`
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
`;
export const CardTitle = styled.div`
  margin: 15px 20px 15px 0;
`;
export const H2 = styled.h2`
  color: var(--primary);
`;
export const Image = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${skinLike});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
