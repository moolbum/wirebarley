import React, { useState } from 'react';
import * as S from './Remittance.style';

const Remittance = ({ remittanc }: { remittanc: string }) => {
  const [remittance, setRemittance] = useState<number | string>();
  const [result, setResult] = useState<string>();

  const remittanceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberRegExr = Number(value.replace(/[^0-9]/g, ''));
    setRemittance(numberRegExr);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (remittance === undefined) {
      setResult('');
      return alert('송금액이 바르지않습니다.');
    }
    if (remittance > 10000) {
      setRemittance('');
      setResult('');
      return alert('송금액이 바르지않습니다.');
    }
    setResult(`수취금액은 ${remittance} 입니다.`);
  };

  return (
    <>
      <S.Remittance value={remittance || ''} onChange={remittanceValue} />
      &nbsp; <span>{remittanc || 'USD'}</span>
      <S.Submit onClick={onSubmit}>Submit</S.Submit>
      {result && <S.Result>{result}</S.Result>}
    </>
  );
};

export default Remittance;
