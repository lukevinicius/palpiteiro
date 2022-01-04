import { Col, Row } from 'react-bootstrap';
import { Div, H2 } from './styles';

import backBrasil from '../../assets/images/backBrasil.png';

export function Country() {
  return (
    <Div>
      <Row>
        <Col md={6}>
          <H2>Mais de 400 mentorados em todo Brasil!</H2>
          <p style={{ fontSize: '26px' }}>
            Agradecemos pela confiança em nosso trabalho ao longo dos ultimos
            anos!
          </p>
        </Col>
        <Col md={6}>
          <img src={backBrasil} alt="backBrasil" />
        </Col>
      </Row>
    </Div>
  );
}
