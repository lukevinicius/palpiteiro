import { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Div, DivAccordion, Hr } from './styles';
import { Accordion } from '../Accordion';

import skinHatImg from '../../assets/leprechaun/skinHat.png';

export function FAQ() {
  const accordionData = [
    {
      title: 'O lucro é garantido?',
      content: `Por mais que tenhamos gerado bons lucros desde o inicio do projeto e sempre fecharmos no positivo jamais garantiremos lucro. Porém como nos responsabilizamos com nosso negocio, em caso de negativarmos o mês nos comprometemos com sua renovação totalmente gratuita!  Fque siente que em renda variável e mercado de risco não existe lucro garantido. Quem te prometer isso está mentindo!`,
    },
    {
      title: 'Preciso entender de esporte?',
      content: `Por mais que tenhamos gerado bons lucros desde o inicio do projeto e sempre fecharmos no positivo jamais garantiremos lucro. Porém como nos responsabilizamos com nosso negocio, em caso de negativarmos o mês nos comprometemos com sua renovação totalmente gratuita!  Fque siente que em renda variável e mercado de risco não existe lucro garantido. Quem te prometer isso está mentindo!`,
    },
    {
      title: 'Posso cancelar meu plano a qualquer momento?',
      content: `Caso você não se adapte, tem até 7 dias para solicitar seu reembolso por nossos canais de suporte. Após 7 dias em caso de cancelamento não haverá nenhum ônus ou reembolso.`,
    },
    {
      title: 'Posso cancelar meu plano a qualquer momento?',
      content:
        'Caso você não se adapte, tem até 7 dias para solicitar seu reembolso por nossos canais de suporte. Após 7 dias em caso de cancelamento não haverá nenhum ônus ou reembolso.',
    },
  ];
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
    <Div id="duvidas">
      <h2
        style={{ fontSize: '50px', textAlign: 'center', color: 'var(--shape)' }}
      >
        Ficou com alguma dúvida?
      </h2>
      <Row>
        {
          // eslint-disable-next-line no-restricted-globals
          width > 1190 ? (
            <Col>
              <img src={skinHatImg} alt="skinHat" />{' '}
            </Col>
          ) : (
            <></>
          )
        }
        <Col>
          <div style={{ padding: '80px 0' }}>
            <h1 style={{ color: 'var(--shape)' }}>Duvidas frequentes</h1>
            <DivAccordion>
              {accordionData.map(({ title, content }) => (
                <>
                  <Hr />
                  <Accordion key={title} title={title} content={content} />
                </>
              ))}
              <Hr />
            </DivAccordion>
          </div>
        </Col>
      </Row>
    </Div>
  );
}
