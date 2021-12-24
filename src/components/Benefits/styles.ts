import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  background: var(--shape);
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
