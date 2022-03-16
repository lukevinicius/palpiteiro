import { Col, Row } from 'react-bootstrap';
import { Card, Div, H2 } from './styles';

import logoPro from '../../assets/logos/logoPro.png';
// import logoEsports from '../../assets/logos/logoEsports.png';
import crossHairWhite from '../../assets/icons/crossHairWhite.png';
import faqWhite from '../../assets/icons/faqWhite.png';
import barChartWhite from '../../assets/icons/barChartWhite.png';
import presentationWhite from '../../assets/icons/presentationWhite.png';
import moneyBagWhite from '../../assets/icons/moneyBagWhite.png';
import trophyWhite from '../../assets/icons/trophyWhite.png';
import { Button } from '../Contact/styles';

export function Plans() {
  return (
    <Div id="planos">
      <Row>
        <Col md={9}>
          <H2>Lucro garantido ou sua renovação é por nossa conta</H2>
        </Col>
        <Col md={3}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <img
                src={logoPro}
                alt="logoPro"
                style={{ height: '5rem', width: '12rem' }}
              />
            </div>
            <div>
              <img src={crossHairWhite} alt="crossHair" />
              <span>Pré bets e ao vivo</span>
            </div>
            <div>
              <img src={faqWhite} alt="crossHair" />
              <span>Suporte online</span>
            </div>
            <div>
              <img src={presentationWhite} alt="chart" />
              <span>Consultoria e conteúdo gratuitos</span>
            </div>
            <div>
              <img src={barChartWhite} alt="crossHair" />
              <span>Gestão de riscos e acompanhamento transparente</span>
            </div>
            <div>
              <img src={trophyWhite} alt="trophy" />
              <span>Eventos e prêmios</span>
            </div>
            <div>
              <img src={moneyBagWhite} alt="crossHair" />
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
              <h6>Perfeito para pequenos negócios ou novos empresários</h6>
              <a href="https://go.hotmart.com/I62162491J?dp=1">
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
