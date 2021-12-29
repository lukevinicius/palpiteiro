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
export const Button = styled.b`
  background-color: transparent;
  text-align: center;
  padding: 5px 15px;
  border: 1px solid var(--primary);
  border-radius: 40px;
  font-size: 18px;
  color: var(--primary);
  width: 130%;
  :hover {
    color: var(--shape);
    background: var(--primary);
  }
`;
