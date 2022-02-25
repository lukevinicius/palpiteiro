import { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Card, Div, H2, SubTitle } from './styles';

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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  return (
    <Div>
      <Row>
        <Col md={4}>
          <H2>Vantagens que só o palpiteiro o oferece!</H2>
          <SubTitle>
            Seja via computador ou smartphone, tenha 100% de autonomia, traga
            seu negocio para gente agora.
          </SubTitle>
        </Col>
        <Col md={6}>
          <Row>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={pizzaGraph} alt="pizza graphic" />
                <p>Sem taxa de adesão.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={faq} alt="pizza graphic" />
                <p>Suporte e FAQ online.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={crossHair} alt="pizza graphic" />
                <p>Tips pré e ao vivo.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={chart} alt="pizza graphic" />
                <p>Consultoria e conteúdos grátuitos.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={presentations} alt="pizza graphic" />
                <p>Gestão de ricos e acompanhamento transparente.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={trophy} alt="pizza graphic" />
                <p>Eventos e prêmios exclusivos.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={medal} alt="pizza graphic" />
                <p>7 dias de garantia após assinatura.</p>
              </Card>
            </Col>
            <Col xxl={3} md={4} sm={3}>
              <Card>
                <img src={calendar} alt="pizza graphic" />
                <p>Lembrentes de renovação.</p>
              </Card>
            </Col>
            <Col xxl={12} md={4} sm={3}>
              <Card>
                <img src={barChart} alt="pizza graphic" />
                <p>Lucro garantido ou renovação do gratuita.</p>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2} style={{ position: 'relative' }}>
          {
            // eslint-disable-next-line no-restricted-globals
            width > 1190 ? (
              <img
                src={skinLike}
                alt="skinLike"
                style={{ position: 'absolute', top: '20%' }}
              />
            ) : (
              <></>
            )
          }
        </Col>
      </Row>
    </Div>
  );
}
