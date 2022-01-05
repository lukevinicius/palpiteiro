import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Country } from '../../components/Country';
import { EasyPay } from '../../components/EasyPay';
import { FAQ } from '../../components/FAQ';
import { Plans } from '../../components/Plans';
import { VideoApresentation } from '../../components/VideoApresentation';
import { Div, DivGreen } from './styles';

export function Home() {
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
        <VideoApresentation />
      </DivGreen>
      <div style={{ backgroundColor: 'var(--shape)' }}>
        <Country />
      </div>
      <EasyPay />
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
