import { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Div, DivAccordion, Hr } from './styles';
import { Accordion } from '../Accordion';

import skinHatImg from '../../assets/leprechaun/skinHat.png';

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
