import {
  RemittanceCountry,
  RecipientCountry,
} from './SelectCountry/SelectCountry';

export const listData = [
  {
    id: 0,
    title: '송금국가: ',
    option: <RemittanceCountry />,
  },
  {
    id: 1,
    title: '수취국가: ',
    option: <RecipientCountry />,
  },
  {
    id: 2,
    title: '환율: ',
    option: '',
  },
  {
    id: 3,
    title: '송금액: ',
    option: '',
  },
];
