import { Container } from './styles';

import backBrasil from '../../assets/images/backBrasil.png';

interface WidthProps {
  width: number;
}

export function Country({ width }: WidthProps) {
  return (
    <Container>
      <img src={backBrasil} alt="backBrasil" />
    </Container>
  );
}
