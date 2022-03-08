import { useState } from 'react';
import { Button, Container } from './styles';

interface Data {
  title: string;
  content: string;
}

export function Accordion({ title, content }: Data) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Button type="button" onClick={() => setIsActive(!isActive)}>
        <div>
          <b
            style={{
              fontSize: '25px',
              color: 'var(--shape)',
            }}
          >
            {title}
          </b>
        </div>
        <div style={{ fontSize: '25px', color: 'var(--shape)' }}>
          {isActive ? '-' : '+'}
        </div>
      </Button>
      {isActive && (
        <p
          style={{
            fontSize: '20px',
            color: 'var(--shape)',
            textAlign: 'justify',
          }}
        >
          {content}
        </p>
      )}
    </Container>
  );
}
