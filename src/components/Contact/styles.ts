import styled from 'styled-components';

export const Div = styled.div`
  padding: 0 0 100px 0;
  background: var(--primary);
`;
export const DivSecundary = styled.div`
  padding: 50px 80px 50px 80px;
  background: var(--shape);
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;
export const H2 = styled.h2`
  color: var(--primary);
`;
export const Input = styled.input`
  border: 3px solid var(--primary);
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 100%;
  ::placeholder {
    color: var(--primary);
  }
`;
export const TextArea = styled.textarea`
  border: 3px solid var(--primary);
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 100%;
  ::placeholder {
    color: var(--primary);
  }
`;
export const Button = styled.button`
  border-radius: 6px;
  padding: 10px;
  width: 140px;
  font-size: 15px;
  background-color: var(--primary);
  color: var(--shape);
  border: 0px;
  margin-top: 15px;
`;
