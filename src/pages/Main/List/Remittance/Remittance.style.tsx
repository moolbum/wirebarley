import styled from 'styled-components';

export const Remittance = styled.input.attrs({
  type: 'text',
})`
  border: 1px solid #2e2e2e;
  font-size: 20px;
`;

export const Submit = styled.button`
  margin-top: 12px;
  padding: 10px 50px;
  background-color: #eeeeee;
  border: 1px solid #e5e5e5;
  font-size: 16px;
  font-weight: 700;
`;

export const Result = styled.p`
  margin-top: 30px;
`;
