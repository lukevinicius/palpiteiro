import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 4rem;
  text-align: center;

  img {
    width: 960px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;

    img {
      width: 370px;
      text-align: center;
    }
  }
`;
