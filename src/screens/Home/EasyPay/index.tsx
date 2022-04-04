import { Col, Row } from 'react-bootstrap';
import { Card, Div, H2 } from './styles';

import pixPay from '../../../assets/easyPay/pixPay.png';
import boleto from '../../../assets/easyPay/boleto.png';
import cards from '../../../assets/easyPay/cards.png';

export function EasyPay() {
  return (
    <Div>
      <div style={{ textAlign: 'center' }}>
        <H2>Pague facil</H2>
        <p style={{ fontSize: '26px', margin: '0 10px' }}>
          Disponibilizamos as melhores formas de pagamento do mercado para
          melhor lhe atender.
        </p>
      </div>
      <div>
        <Row>
          <Col md={4}>
            <Card
              data-aos="flip-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <img src={pixPay} alt="pixpay" loading="lazy" />
              <p>Pagamentos via Pix!</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              data-aos="flip-down"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <img src={cards} alt="cards" loading="lazy" />
              <p>Pagamentos via cartão de credito em até 12x sem juros</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              data-aos="flip-down"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              <img src={boleto} alt="boleto" loading="lazy" />
              <p>Pagamentos via boleto</p>
            </Card>
          </Col>
        </Row>
      </div>
    </Div>
  );
}
