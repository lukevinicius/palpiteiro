import styled from 'styled-components';

export const Div = styled.div`
  padding: 3rem 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 2.5rem;
  }
`;

export const H2 = styled.b`
  color: var(--primary);
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const Card = styled.div`
  background: var(--primary);
  margin-top: 15px;
  padding: 25px;
  font-size: 18px;
  height: 220px;
  width: 100%;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    height: 50px;
  }

  p {
    color: var(--shape);
    margin: 30px 0;
    text-align: justify;
  }
`;
