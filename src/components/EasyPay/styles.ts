import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 40px 20px 40px;
  }
`;
export const DivCard = styled.div`
  margin-top: 35px;
  justify-content: center;
  align-items: center;
  color: var(--shape);
`;
export const H2 = styled.b`
  color: var(--primary);
  font-size: 80px;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const P = styled.p`
  margin: 30px 0 0 0;
  text-align: justify;
`;
export const Card = styled.div`
  background: var(--primary);
  margin-top: 15px;
  padding: 25px;
  font-size: 18px;
  height: 220px;
  width: 240px;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
