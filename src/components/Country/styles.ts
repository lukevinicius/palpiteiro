import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 4rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  img {
    width: 1000px;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
    img {
      width: 300px;
    }
  }
`;
