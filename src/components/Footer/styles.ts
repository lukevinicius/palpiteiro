import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 20rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem 4rem;
  align-items: center;
  background: var(--shape);

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
    grid-gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    color: var(--primary);
    margin-right: 1rem;
  }
`;
export const Attendance = styled.div`
  h2 {
    font-size: 24px;
    color: var(--text);
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: var(--text);
  }
`;

export const H2 = styled.h2`
  color: var(--text);
  font-size: 1rem;
  margin-top: 1.5rem;
`;
