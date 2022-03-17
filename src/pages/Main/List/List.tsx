import React from 'react';
import * as S from './List.style';
import Remittance from './Remittance';
import { useSelect } from '../../../hooks/useSelect';
const REMITTANCE_COUNTRY = 'remittanceCountry';
const RECIPIENT_COUNTRY = 'recipientCountry';

const List = () => {
  const [selectCountry, select] = useSelect();
  console.log(select.remittanceCountry);
  return (
    <S.List>
      <S.ListTitle>
        송금국가:
        <S.Select name={REMITTANCE_COUNTRY} onChange={selectCountry}>
          <S.Option>미국 (USD)</S.Option>
          <S.Option>호주 (AUD)</S.Option>
        </S.Select>
      </S.ListTitle>
      <S.ListTitle>
        수취국가:
        <S.Select name={RECIPIENT_COUNTRY} onChange={selectCountry}>
          <S.Option>한국 (KRW)</S.Option>
          <S.Option>일본 (JPY)</S.Option>
          <S.Option>필리핀 (PHP)</S.Option>
        </S.Select>
      </S.ListTitle>
      <S.ListTitle>
        환율: {select.recipientCountry || 'KRW'}/
        {select.remittanceCountry || 'USD'}
      </S.ListTitle>
      <S.ListTitle>
        송금액: <Remittance remittanc={select.remittanceCountry} />
      </S.ListTitle>
    </S.List>
  );
};

export default List;
