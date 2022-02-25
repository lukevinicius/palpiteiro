import { useEffect, useState } from 'react';

import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Country } from '../../components/Country';
import { EasyPay } from '../../components/EasyPay';
import { FAQ } from '../../components/FAQ';
import { Plans } from '../../components/Plans';
import { VideoApresentation } from '../../components/VideoApresentation';
import { Div, DivGreen } from './styles';

export function Home() {
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
    <>
      <Div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
          }}
        >
          <h2 style={{ color: 'var(--primary)' }}>Site em desenvolvimento</h2>
        </div>
      </Div>
      <Benefits />
      <DivGreen>
        <VideoApresentation width={width} />
      </DivGreen>
      <Country width={width} />
      <EasyPay />
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
