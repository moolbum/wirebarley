const USD = '미국 (USD)';
const AUD = '호주 (AUD)';
const KRW = '한국 (KRW)';
const JPY = '일본 (JPY)';
const PHP = '필리핀 (PHP)';
const USDUSD = 'USDUSD';
const USDAUD = 'USDAUD';
const USDKRW = 'USDKRW';
const USDJPY = 'USDJPY';
const USDPHP = 'USDPHP';

export const remittanceData = [
  {
    id: 0,
    country: '==선택하기==',
    value: '',
  },
  {
    id: 1,
    country: USD,
    value: USDUSD,
  },
  {
    id: 2,
    country: AUD,
    value: USDAUD,
  },
];

export const recipientData = [
  {
    id: 0,
    country: '==선택하기==',
    value: '',
  },
  {
    id: 1,
    country: KRW,
    value: USDKRW,
  },
  {
    id: 2,
    country: JPY,
    value: USDJPY,
  },
  {
    id: 3,
    country: PHP,
    value: USDPHP,
  },
];
