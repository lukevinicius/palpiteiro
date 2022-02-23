import styled from 'styled-components';

export const Div = styled.div`
  padding: 3rem 4rem;
  background: var(--shape);
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
  }

  a {
    color: var(--primary);
    margin-right: 1rem;
  }
`;
export const DivIcon = styled.div`
  margin-right: 10px;
`;
export const H2 = styled.h2`
  color: var(--text);
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;
