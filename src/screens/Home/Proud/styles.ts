import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    color: var(--primary);
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    background-color: var(--primary);
    padding: 1rem;
    color: var(--shape);
    font-weight: bold;
    border: 0;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 792px) {
    img {
      width: 300px;
    }
  }
`;
