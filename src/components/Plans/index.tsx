import { Col, Row } from 'react-bootstrap';
import { Card, CardDisabled, Div } from './styles';

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
    <Div>
      <Row>
        <Col md={6}>
          <h2 style={{ color: 'var(--primary)', fontSize: '72px' }}>
            Lucro garantido ou sua renovação é por nossa conta
          </h2>
        </Col>
        <Col md={3}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <img src={logoPro} alt="logoPro" />
            </div>
            <div style={{ margin: '20px' }}>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={crossHairWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Pré bets e ao vivo
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img src={faqWhite} alt="crossHair" height="25" width="25" />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Suporte online
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={presentationWhite}
                  alt="chart"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Consultoria e conteúdo gratuitos
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={barChartWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Gestão de ricos e acompanhamento transparente
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img src={trophyWhite} alt="trophy" height="25" width="25" />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Eventos e prêmios
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={moneyBagWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Lucro garantido ou sua renovação é por nossa conta
                </h2>
              </div>
            </div>
            <hr
              style={{ color: 'var(--shape)', height: '1px', opacity: '1' }}
            />
            <div
              className="d-flex"
              style={{
                color: 'var(--shape)',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <h2 style={{ fontSize: '22px', marginTop: '13%' }}>R$</h2>
              <h2 style={{ fontSize: '60px' }}>249</h2>
              <h2 style={{ fontSize: '22px', marginTop: '13%' }}>,99/Mês</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h6 style={{ fontSize: '12px', color: 'var(--shape)' }}>
                Perfeito para pequenos negócios ou novos empresários
              </h6>
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
            <div style={{ margin: '20px' }}>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={crossHairWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Pré bets e ao vivo
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img src={faqWhite} alt="crossHair" height="25" width="25" />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Suporte online
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={presentationWhite}
                  alt="chart"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Consultoria e conteúdo gratuitos
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={barChartWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Gestão de ricos e acompanhamento transparente
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img src={trophyWhite} alt="trophy" height="25" width="25" />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Eventos e prêmios
                </h2>
              </div>
              <div className="d-flex" style={{ color: 'var(--shape)' }}>
                <img
                  src={moneyBagWhite}
                  alt="crossHair"
                  height="25"
                  width="25"
                />
                <h2
                  style={{
                    fontSize: '12px',
                    marginTop: '2%',
                    marginLeft: '5px',
                  }}
                >
                  Lucro garantido ou sua renovação é por nossa conta
                </h2>
              </div>
            </div>
            <hr
              style={{ color: 'var(--shape)', height: '1px', opacity: '1' }}
            />
            <div
              className="d-flex"
              style={{
                color: 'var(--shape)',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <h2 style={{ fontSize: '22px', marginTop: '13%' }}>R$</h2>
              <h2 style={{ fontSize: '60px' }}>249</h2>
              <h2 style={{ fontSize: '22px', marginTop: '13%' }}>,99/Mês</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h6 style={{ fontSize: '12px', color: 'var(--shape)' }}>
                Perfeito para pequenos negócios ou novos empresários
              </h6>
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
          </CardDisabled>
        </Col>
      </Row>
    </Div>
  );
}
