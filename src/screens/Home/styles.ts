import styled from 'styled-components';
import backBrasil from '../../assets/images/backBrasil.png';

export const Div = styled.div`
  height: 100vh;
  margin-top: -10rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
  /* @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  } */
`;
export const DivGreen = styled.div`
  background: var(--primary);
`;
export const DivImage = styled.div`
  background-image: url(${backBrasil});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right;
`;
