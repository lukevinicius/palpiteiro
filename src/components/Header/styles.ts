import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
  background: none;
`;
export const B = styled.b`
  font-size: 18px;
  color: var(--primary);
`;
export const Button = styled.div`
  background: var(--primary);
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  font-size: 15px;
  color: var(--shape);
  /* :hover {
    color: var(--text);
    background: var(--shape);
  } */
`;
