import { useState } from 'react';

export const useSelect = () => {
  const [select, setSelect] = useState<any>('');

  const selectCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    const country = value.slice(3, 6);
    setSelect({ ...select, [name]: country, value: value });
  };

  return [selectCountry, select];
};
