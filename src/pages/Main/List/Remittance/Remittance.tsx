import React, { useState } from 'react';
import * as S from './Remittance.style';

const Remittance = ({ remittanc }: { remittanc: string }) => {
  const [remittance, setRemittance] = useState<string>();
  const remittanceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberRegExr = value.replace(/[^0-9]/g, '');
    setRemittance(numberRegExr);
  };

  return (
    <>
      <S.Remittance value={remittance || ''} onChange={remittanceValue} />
      &nbsp; <span>{remittanc || 'USD'}</span>
    </>
  );
};

export default Remittance;
