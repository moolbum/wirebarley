import * as S from './SelectCountry.style';
const REMITTANCE_COUNTRY = 'remittanceCountry';
const RECIPIENT_COUNTRY = 'recipientCountry';

export const RemittanceCountry = () => {
  return (
    <S.Select name={REMITTANCE_COUNTRY}>
      <S.Option>미국 (USD)</S.Option>
      <S.Option>호주 (AUD)</S.Option>
    </S.Select>
  );
};

export const RecipientCountry = () => {
  return (
    <S.Select name={RECIPIENT_COUNTRY}>
      <S.Option>한국 (KRW)</S.Option>
      <S.Option>일본 (JPY)</S.Option>
      <S.Option>필리핀 (PHP)</S.Option>
    </S.Select>
  );
};
