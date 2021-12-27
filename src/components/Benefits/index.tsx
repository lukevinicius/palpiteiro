import { Col, Row } from 'react-bootstrap';
import { Card, DivCol, CardTitle, Div, H2 } from './styles';

import pizzaGraph from '../../assets/icons/pizzaGraph.png';
import faq from '../../assets/icons/faq.png';
import crossHair from '../../assets/icons/crossHair.png';
import chart from '../../assets/icons/chart.png';
import presentations from '../../assets/icons/presentations.png';
import trophy from '../../assets/icons/trophy.png';
import medal from '../../assets/icons/medal.png';
import calendar from '../../assets/icons/calendar.png';
import barChart from '../../assets/icons/barChart.png';
import skinLike from '../../assets/leprechaun/skinLike.png';

export function Benefits() {
  return (
    <Div>
      <Row>
        <Col md={4}>
          <H2 style={{ fontSize: '64px' }}>
            Vantagens que só o palpiteiro o oferece!
          </H2>
          <p style={{ color: 'var(--text)', fontSize: '30px' }}>
            Seja via computador ou smartphone, tenha 100% de autonomia, traga
            seu negocio para gente agora.
          </p>
        </Col>
        <Col md={6}>
          <Row>
            <Col sm={1} md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={pizzaGraph} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>Sem taxa de adesão.</p>
                </Card>
              </DivCol>
            </Col>
            <Col sm={2} md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={faq} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>Suporte e FAQ online.</p>
                </Card>
              </DivCol>
            </Col>
            <Col sm={2} md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={crossHair} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>Tips pré e ao vivo.</p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={chart} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>
                    Consultoria e conteúdos grátuitos.
                  </p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={presentations} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>
                    Gestão de ricos e acompanhamento transparente.
                  </p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={trophy} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>
                    Eventos e prêmios exclusivos.
                  </p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={medal} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>
                    7 dias de garantia após assinatura.
                  </p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={calendar} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>Lembrentes de renovação.</p>
                </Card>
              </DivCol>
            </Col>
            <Col md={4}>
              <DivCol>
                <Card>
                  <CardTitle>
                    <img src={barChart} alt="pizza graphic" />
                  </CardTitle>
                  <p style={{ fontSize: '18px' }}>
                    Lucro garantido ou renovação do gratuita.
                  </p>
                </Card>
              </DivCol>
            </Col>
          </Row>
        </Col>
        <Col md={2} style={{ position: 'relative' }}>
          {
            // eslint-disable-next-line no-restricted-globals
            screen.width > 768 ? (
              <img
                src={skinLike}
                alt="skinLike"
                style={{ position: 'absolute', top: '20%' }}
              />
            ) : (
              <div />
            )
          }
        </Col>
      </Row>
    </Div>
  );
}
