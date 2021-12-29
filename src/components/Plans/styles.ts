import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  background: var(--shape);
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;
export const H2 = styled.b`
  color: var(--primary);
  text-align: justify;
  font-size: 80px;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const Card = styled.div`
  background: var(--primary);
  padding: 10px;
  border-radius: 7px;
`;
export const CardDisabled = styled.div`
  background: var(--primary);
  padding: 10px;
  border-radius: 7px;
  filter: grayscale(100%);
  opacity: 0.45;
`;
