import { Benefits } from '../../components/Benefits';
import { Contact } from '../../components/Contact';
import { Country } from '../../components/Country';
import { FAQ } from '../../components/FAQ';
import { Plans } from '../../components/Plans';
import { Div, DivImage } from './styles';

export function Home() {
  return (
    <>
      <Div>
        <DivImage>
          <Country />
        </DivImage>
      </Div>
      <Benefits />
      <Plans />
      <FAQ />
      <Contact />
    </>
  );
}
