import styled from 'styled-components';
import backVideo from '../../assets/images/backVideo.png';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  background-image: url(${backVideo});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;
