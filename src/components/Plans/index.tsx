import { Col, Row } from 'react-bootstrap';
import { Card, CardDisabled, Div, H2 } from './styles';

import logoPro from '../../assets/logos/logoPro.png';
import logoEsports from '../../assets/logos/logoEsports.png';
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
        <Col md={6}>
          <H2>Lucro garantido ou sua renovação é por nossa conta</H2>
        </Col>
        <Col md={3}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <img src={logoPro} alt="logoPro" />
            </div>
            <div>
              <img
                src={crossHairWhite}
                alt="crossHair"
                height="25"
                width="25"
              />
              <span>Pré bets e ao vivo</span>
            </div>
            <div>
              <img src={faqWhite} alt="crossHair" height="25" width="25" />
              <span>Suporte online</span>
            </div>
            <div>
              <img src={presentationWhite} alt="chart" height="25" width="25" />
              <span>Consultoria e conteúdo gratuitos</span>
            </div>
            <div>
              <img src={barChartWhite} alt="crossHair" height="25" width="25" />
              <span>Gestão de riscos e acompanhamento transparente</span>
            </div>
            <div>
              <img src={trophyWhite} alt="trophy" height="25" width="25" />
              <span>Eventos e prêmios</span>
            </div>
            <div>
              <img src={moneyBagWhite} alt="crossHair" height="25" width="25" />
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
              <h2 style={{ fontSize: '50px' }}>
                <span style={{ fontSize: '22px' }}>R$ </span> 249
                <span style={{ fontSize: '22px' }}>,99/Mês</span>
              </h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h6>Perfeito para pequenos negócios ou novos empresários</h6>
              <Button
                style={{
                  color: 'var(--primary)',
                  backgroundColor: 'var(--shape)',
                  width: '60%',
                }}
              >
                <h2>ASSINE JÁ</h2>
              </Button>
            </div>
          </Card>
        </Col>
        <Col md={3}>
          <CardDisabled>
            <div style={{ textAlign: 'center' }}>
              <img src={logoEsports} alt="logoEsports" />
            </div>
            <div>
              <img
                src={crossHairWhite}
                alt="crossHair"
                height="25"
                width="25"
              />
              <span>Pré bets e ao vivo</span>
            </div>
            <div>
              <img src={faqWhite} alt="crossHair" height="25" width="25" />
              <span>Suporte online</span>
            </div>
            <div>
              <img src={presentationWhite} alt="chart" height="25" width="25" />
              <span>Consultoria e conteúdo gratuitos</span>
            </div>
            <div>
              <img src={barChartWhite} alt="crossHair" height="25" width="25" />
              <span>Gestão de riscos e acompanhamento transparente</span>
            </div>
            <div>
              <img src={trophyWhite} alt="trophy" height="25" width="25" />
              <span>Eventos e prêmios</span>
            </div>
            <div>
              <img src={moneyBagWhite} alt="crossHair" height="25" width="25" />
              <span>Lucro garantido ou sua renovação é por nossa conta</span>
            </div>
            <hr />
            <div
              className="d-flex"
              style={{
                color: 'var(--shape)',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <h2 style={{ fontSize: '50px' }}>
                <span style={{ fontSize: '22px' }}>R$ </span> 249
                <span style={{ fontSize: '22px' }}>,99/Mês</span>
              </h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h6>Perfeito para pequenos negócios ou novos empresários</h6>
              <Button
                style={{
                  color: 'var(--primary)',
                  backgroundColor: 'var(--shape)',
                  width: '60%',
                }}
              >
                <h2>EM BREVE</h2>
              </Button>
            </div>
          </CardDisabled>
        </Col>
      </Row>
    </Div>
  );
}
