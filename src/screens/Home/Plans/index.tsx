import { Col, Row } from 'react-bootstrap';
import { Card, Div, B } from './styles';

import logoPro from '../../../assets/logos/logoPro.png';
// import logoEsports from '../../../assets/logos/logoEsports.png';
import crossHairWhite from '../../../assets/icons/crossHairWhite.png';
import faqWhite from '../../../assets/icons/faqWhite.png';
import barChartWhite from '../../../assets/icons/barChartWhite.png';
import presentationWhite from '../../../assets/icons/presentationWhite.png';
import moneyBagWhite from '../../../assets/icons/moneyBagWhite.png';
import trophyWhite from '../../../assets/icons/trophyWhite.png';
import { Button } from '../Contact/styles';

export function Plans() {
  const ref = window.location.href.split('=');

  return (
    <Div id="planos">
      <Row>
        <Col md={9}>
          <B>Lucro garantido ou sua renovação é por nossa conta</B>
        </Col>
        <Col md={3}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <img
                src={logoPro}
                alt="logoPro"
                style={{ height: '5rem', width: '12rem' }}
                loading="lazy"
              />
            </div>
            <div>
              <img src={crossHairWhite} alt="crossHair" loading="lazy" />
              <span>Pré bets e ao vivo</span>
            </div>
            <div>
              <img src={faqWhite} alt="crossHair" loading="lazy" />
              <span>Suporte online</span>
            </div>
            <div>
              <img src={presentationWhite} alt="chart" loading="lazy" />
              <span>Consultoria e conteúdo gratuitos</span>
            </div>
            <div>
              <img src={barChartWhite} alt="crossHair" loading="lazy" />
              <span>Gestão de riscos e acompanhamento transparente</span>
            </div>
            <div>
              <img src={trophyWhite} alt="trophy" loading="lazy" />
              <span>Eventos e prêmios</span>
            </div>
            <div>
              <img src={moneyBagWhite} alt="crossHair" loading="lazy" />
              <span>Lucro garantido ou sua renovação é por nossa conta</span>
            </div>
            <hr />
            <div
              className="d-flex"
              style={{
                color: 'var(--shape)',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <h2 style={{ fontSize: '3rem' }}>
                <span style={{ fontSize: '1.5rem' }}>R$ </span> 249
                <span style={{ fontSize: '1.5rem', margin: 0 }}>,99 /Mês</span>
              </h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h6>
                Receba entradas exclusivas + Renovação gratuita em meses
                negativos
              </h6>
              <a
                href={`https://go.hotmart.com/${
                  ref[1] ? ref[1] : 'I62162491J'
                }?dp=1`}
              >
                <Button
                  style={{
                    color: 'var(--primary)',
                    backgroundColor: 'var(--shape)',
                    width: '60%',
                  }}
                >
                  <h2>ASSINE JÁ</h2>
                </Button>
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Div>
  );
}
