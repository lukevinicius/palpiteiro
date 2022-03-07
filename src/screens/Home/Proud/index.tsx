import { FaFileCsv } from 'react-icons/fa';
import { Container, Content } from './styles';
import graphCsvImg from '../../../assets/images/graphCsv.png';

export function Proud() {
  return (
    <Container>
      <Content>
        <div data-aos="fade-right">
          <h2>Orgulho do nosso resultado nos ultimos 12 meses.</h2>
          <p>
            Confira nossa planilha detalhada com todas as nossas entredas dos
            nossos grupos vip e free!
          </p>
          <button type="button">
            Ver planilha <FaFileCsv />
          </button>
        </div>
        <div data-aos="fade-left">
          <img src={graphCsvImg} alt="grafico da planilha" />
        </div>
      </Content>
    </Container>
  );
}
