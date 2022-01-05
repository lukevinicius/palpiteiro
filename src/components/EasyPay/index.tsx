import { Col, Row } from 'react-bootstrap';
import { Card, Div, DivCard, H2, P } from './styles';

import pixPay from '../../assets/easyPay/pixPay.png';
import boleto from '../../assets/easyPay/boleto.png';
import cards from '../../assets/easyPay/cards.png';

export function EasyPay() {
  return (
    <Div>
      <div style={{ textAlign: 'center' }}>
        <H2>Pague facil</H2>
        <p style={{ fontSize: '26px', margin: '0 10px 0 10px' }}>
          Disponibilizamos as melhores formas de pagamento do mercado para
          melhor lhe atender.
        </p>
      </div>
      <DivCard>
        <Row>
          <Col md={3} />
          <Col md={6} sm={1}>
            <Row>
              <Col>
                <Card>
                  <img src={pixPay} alt="pixpay" />
                  <P>Pagamentos via Pix!</P>
                </Card>
              </Col>
              <Col>
                <Card>
                  <img src={cards} alt="cards" />
                  <P>Pagamentos via cartão de credito em até 12x sem juros</P>
                </Card>
              </Col>
              <Col>
                <Card>
                  <img src={boleto} alt="boleto" />
                  <P>Pagamentos via boleto</P>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={3} />
        </Row>
      </DivCard>
    </Div>
  );
}
