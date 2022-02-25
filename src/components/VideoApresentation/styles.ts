import styled from 'styled-components';
import backVideo from '../../assets/images/backVideo.png';

export const Container = styled.div`
  padding: 50px 80px;
  background-image: url(${backVideo});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    padding: 20px 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    @media screen and (min-width: 1400px) {
      width: 550px;
      height: 350px;
    }
  }

  iframe {
    width: 635px;
    height: 360px;

    @media screen and (max-width: 768px) {
      width: 315px;
      height: 180px;
    }
  }
`;
