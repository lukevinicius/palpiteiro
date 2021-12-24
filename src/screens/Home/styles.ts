import styled from 'styled-components';
import backBrasil from '../../assets/images/backBrasil.png';

export const Div = styled.div`
  background: var(--shape);
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
