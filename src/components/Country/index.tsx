import { Col, Row } from 'react-bootstrap';
import { Div, H2 } from './styles';

import backBrasil from '../../assets/images/backBrasil.png';

interface WidthProps {
  width: number;
}

export function Country({ width }: WidthProps) {
  return (
    <Div>
      <Row>
        <Col>
          <H2>Mais de 400 mentorados em todo Brasil!</H2>
          <p style={{ fontSize: '26px' }}>
            Agradecemos pela confiança em nosso trabalho ao longo dos ultimos
            anos!
          </p>
        </Col>
        {width > 1212 ? (
          <Col>
            <img src={backBrasil} alt="backBrasil" />
          </Col>
        ) : (
          <div />
        )}
      </Row>
    </Div>
  );
}
