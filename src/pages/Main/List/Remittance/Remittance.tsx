import React, { useState } from 'react';
import * as S from './Remittance.style';

const Remittance = () => {
  const [remittance, setRemittance] = useState<string>();
  const remittanceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numberRegExr = value.replace(/[^0-9]/g, '');
    setRemittance(numberRegExr);
  };

  return <S.Remittance value={remittance || ''} onChange={remittanceValue} />;
};

export default Remittance;