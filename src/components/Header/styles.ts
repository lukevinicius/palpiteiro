import styled from 'styled-components';

export const B = styled.b`
  font-size: 14px;
  color: var(--primary);
`;
export const ButtonFree = styled.button`
  background: var(--shape);
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--primary);
  font-weight: bold;

  transition: 0.2s;

  :hover {
    background: var(--primary);
    color: var(--shape);
  }
`;
export const Button = styled.button`
  background: var(--primary);
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  font-size: 14px;
  color: var(--shape);
`;
