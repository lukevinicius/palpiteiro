import { Col, Row } from 'react-bootstrap';
import { Div } from './styles';
import vivaMetodo from '../../assets/images/vivaMetodo.png';

export function VideoApresentation() {
  return (
    <Div>
      <Row>
        <Col>
          {
            // eslint-disable-next-line no-restricted-globals
            screen.width > 768 ? (
              <img src={vivaMetodo} alt="vivaMetodo" />
            ) : (
              <div />
            )
          }
        </Col>
      </Row>
    </Div>
  );
}
