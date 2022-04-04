import { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Card, Container, Content, ContentCard, H2, SubTitle } from './styles';

import pizzaGraph from '../../../assets/icons/pizzaGraph.png';
import faq from '../../../assets/icons/faq.png';
import crossHair from '../../../assets/icons/crossHair.png';
import chart from '../../../assets/icons/chart.png';
import presentations from '../../../assets/icons/presentations.png';
import trophy from '../../../assets/icons/trophy.png';
import medal from '../../../assets/icons/medal.png';
import calendar from '../../../assets/icons/calendar.png';
import barChart from '../../../assets/icons/barChart.png';
import skinLike from '../../../assets/leprechaun/skinLike.png';

export function Benefits() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <Container>
      <Content>
        <div>
          <H2>Vantagens que só o palpiteiro o oferece!</H2>
          <SubTitle>
            Seja via computador ou smartphone, tenha 100% de autonomia, traga
            seu negocio para gente agora.
          </SubTitle>
        </div>
        <div>
          <ContentCard>
            <div>
              <Card>
                <img src={pizzaGraph} alt="pizza graphic" loading="lazy" />
                <p>Sem taxa de adesão.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={faq} alt="pizza graphic" loading="lazy" />
                <p>Suporte e FAQ online.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={crossHair} alt="pizza graphic" loading="lazy" />
                <p>Tips pré e ao vivo.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={chart} alt="pizza graphic" loading="lazy" />
                <p>Consultoria e conteúdos grátuitos.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={presentations} alt="pizza graphic" loading="lazy" />
                <p>Gestão de ricos e acompanhamento transparente.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={trophy} alt="pizza graphic" loading="lazy" />
                <p>Eventos e prêmios exclusivos.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={medal} alt="pizza graphic" loading="lazy" />
                <p>7 dias de garantia após assinatura.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={calendar} alt="pizza graphic" loading="lazy" />
                <p>Lembrentes de renovação.</p>
              </Card>
            </div>
            <div>
              <Card>
                <img src={barChart} alt="pizza graphic" loading="lazy" />
                <p>Lucro garantido ou renovação do gratuita.</p>
              </Card>
            </div>
          </ContentCard>
        </div>
      </Content>
    </Container>
  );
}
