import styled from 'styled-components';

export const Div = styled.div`
  padding: 3rem 4rem;
  background: var(--primary);

  h2 {
    font-size: 50px;
    text-align: center;
    color: var(--shape);
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
  }
`;
export const DivAccordion = styled.div`
  background-color: var(--primary);
`;
export const Hr = styled.div`
  border: 2px solid var(--shape);
`;
