import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 80px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 40px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
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

  @media screen and (max-width: 1212px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  @media screen and (max-width: 792px) {
    img {
      width: 450px;
    }
  }
`;
