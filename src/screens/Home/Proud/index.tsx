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
          <a href="https://docs.google.com/spreadsheets/d/1Ssts6sv9sUvgWZaF7x6QHI8beYRa9TlOY_I9xnuFeGE/edit?usp=sharing">
            Ver planilha <FaFileCsv />
          </a>
        </div>
        <div data-aos="fade-left">
          <img src={graphCsvImg} alt="grafico da planilha" />
        </div>
      </Content>
    </Container>
  );
}
