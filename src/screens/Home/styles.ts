import styled from 'styled-components';
import backBrasil from '../../assets/images/backBrasil.png';

export const Div = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;
export const DivImage = styled.div`
  background-image: url(${backBrasil});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right;
`;
