import { Col, Row } from 'react-bootstrap';
import { Div, DivAccordion, Hr } from './styles';

import skinHatImg from '../../../assets/leprechaun/skinHat.png';
import { Accordion } from '../../../components/Accordion';

interface WidthProps {
  width: number;
}

export function FAQ({ width }: WidthProps) {
  const accordionData = [
    {
      title: 'O lucro é garantido?',
      content: `Por mais que tenhamos gerado bons lucros desde o inicio do projeto e sempre fecharmos no positivo jamais garantiremos lucro. Porém como nos responsabilizamos com nosso negocio, em caso de negativarmos o mês nos comprometemos com sua renovação totalmente gratuita!  Fque siente que em renda variável e mercado de risco não existe lucro garantido. Quem te prometer isso está mentindo!`,
    },
    {
      title: 'Preciso entender de esporte?',
      content: `Não! Você não precisa entender e nem acompanhar nada, basta conferir as dicas no grupo do Telegram, copiar e seguir nossa gestão.`,
    },
    {
      title: 'Posso cancelar meu plano a qualquer momento?',
      content: `Caso você não se adapte, tem até 7 dias para solicitar seu reembolso por nossos canais de suporte. Após 7 dias em caso de cancelamento não haverá nenhum ônus ou reembolso.`,
    },
  ];

  return (
    <Div id="duvidas">
      <h2>Ficou com alguma dúvida?</h2>
      <Row>
        {width > 1190 && (
          <Col>
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              src={skinHatImg}
              alt="skinHat"
            />{' '}
          </Col>
        )}
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
