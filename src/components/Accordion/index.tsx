import { useState } from 'react';
import { Button, Div } from './styles';

interface Data {
  title: string;
  content: string;
}

export function Accordion({ title, content }: Data) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Div>
      <Button
        className="accordion-title"
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <b style={{ fontSize: '25px', color: 'var(--shape)' }}>{title}</b>
        </div>
        <div style={{ fontSize: '25px', color: 'var(--shape)' }}>
          {isActive ? '-' : '+'}
        </div>
      </Button>
      {isActive && (
        <div
          className="accordion-content"
          style={{ fontSize: '20px', color: 'var(--shape)' }}
        >
          {content}
        </div>
      )}
    </Div>
  );
}
