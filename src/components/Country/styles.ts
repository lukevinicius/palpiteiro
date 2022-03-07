import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 80px;
  text-align: center;

  img {
    width: 960px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 40px;

    img {
      width: 400px;
      text-align: center;
    }
  }
`;
