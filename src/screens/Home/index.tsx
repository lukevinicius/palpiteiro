import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Country } from '../../components/Country';
import { FAQ } from '../../components/FAQ';
import { Plans } from '../../components/Plans';
import { VideoApresentation } from '../../components/VideoApresentation';
import { Div, DivGreen, DivImage } from './styles';

export function Home() {
  return (
    <>
      <Benefits />
      <DivGreen>
        <VideoApresentation />
      </DivGreen>
      <Div>
        <DivImage>
          <Country />
        </DivImage>
      </Div>
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
