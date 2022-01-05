import { Col, Row } from 'react-bootstrap';
import { Div, DivAccordion, Hr } from './styles';
import skinHat from '../../assets/leprechaun/skinHat.png';
import { Accordion } from '../Accordion';

export function FAQ() {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

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
          screen.width > 768 ? (
            <Col>
              <img src={skinHat} alt="skinHat" />{' '}
            </Col>
          ) : (
            <div />
          )
        }
        <Col md={7}>
          <div style={{ padding: '80px 0 80px 0' }}>
            <h1 style={{ color: 'var(--shape)' }}>Duvidas frequentes</h1>
            <DivAccordion>
              {accordionData.map(({ title, content }) => (
                <>
                  <Hr />
                  <Accordion title={title} content={content} />
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
