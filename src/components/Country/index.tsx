import { Col, Row } from 'react-bootstrap';
import { Div } from './styles';

export function Country() {
  return (
    <Div>
      <h2 style={{ fontSize: '90px', color: 'var(--primary)' }}>
        Mais de 400 mentorados em todo Brasil!
      </h2>
      <p style={{ fontSize: '26px' }}>
        Agradecemos pela confiança em nosso trabalho ao longo dos ultimos anos!
      </p>
    </Div>
  );
}
