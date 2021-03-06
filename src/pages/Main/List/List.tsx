import { useState, useEffect } from 'react';
import * as S from './List.style';
import Remittance from './Remittance';

import { useSelect } from '../../../hooks/useSelect';
import { remittanceData, recipientData } from './data';
import axios from 'axios';

const REMITTANCE_COUNTRY = 'remittanceCountry';
const RECIPIENT_COUNTRY = 'recipientCountry';
const API =
  'http://api.currencylayer.com/live?access_key=9f1b7f8ab5d825f9ebd5228073102aa6';

interface ExchangeRate {
  success: boolean;
  quotes:
    | {
        USDAUD: number;
        USDKRW: number;
        USDJPY: number;
        USDPHP: number;
      }
    | any;
  source: string;
  terms: string;
  timestamp: number;
  privacy: string;
}

const List = () => {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate>();
  const [selectCountry, select] = useSelect();

  useEffect(() => {
    axios.get(API).then(res => setExchangeRate(res.data));
  }, []);

  const exchangeRateCountry = exchangeRate?.quotes[select.value];

  return (
    <S.List>
      <S.ListTitle>
        송금국가:
        <S.Select name={REMITTANCE_COUNTRY} onChange={selectCountry}>
          {remittanceData.map(data => {
            return (
              <S.Option key={data.id} value={data.value}>
                {data.country}
              </S.Option>
            );
          })}
        </S.Select>
      </S.ListTitle>
      <S.ListTitle>
        수취국가:
        <S.Select name={RECIPIENT_COUNTRY} onChange={selectCountry}>
          {recipientData.map(data => {
            return (
              <S.Option key={data.id} value={data.value}>
                {data.country}
              </S.Option>
            );
          })}
        </S.Select>
      </S.ListTitle>

      <S.ListTitle>
        환율:&nbsp;
        {select && exchangeRateCountry}
        &nbsp;
        {select.recipientCountry}/{select.remittanceCountry}
      </S.ListTitle>
      <S.ListTitle>
        송금액:{' '}
        <Remittance
          exchangeRate={exchangeRateCountry}
          remittanc={select.remittanceCountry}
          recipient={select.recipientCountry}
        />
      </S.ListTitle>
    </S.List>
  );
};

export default List;
