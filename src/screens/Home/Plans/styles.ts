import styled from 'styled-components';

export const Div = styled.div`
  padding: 3rem 4rem;
  background: var(--shape);
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2.5rem;
  }
`;
export const B = styled.b`
  color: var(--primary);
  text-align: justify;
  font-size: 5rem;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 2.25rem;
  }
`;
export const Card = styled.div`
  background: var(--primary);
  padding: 0.5rem;
  border-radius: 7px;
  color: var(--shape);
  margin-top: 1rem;

  div {
    span {
      font-weight: bold;
      margin-left: 0.5rem;
    }

    img {
      height: 1.5rem;
      width: 1.5rem;
    }

    h6 {
      font-size: 1.25rem;
    }
  }

  hr {
    height: 1px;
    opacity: 1;
  }
`;

export const CardDisabled = styled.div`
  background: var(--primary);
  color: var(--shape);
  padding: 0.5rem;
  border-radius: 7px;
  filter: grayscale(100%);
  opacity: 0.45;
  margin-top: 1rem;

  div {
    span {
      font-size: 1.25rem;
      font-weight: bold;
      margin-left: 0.5rem;
    }

    h6 {
      font-size: 1.25rem;
    }
  }

  hr {
    height: 1px;
    opacity: 1;
  }
`;
