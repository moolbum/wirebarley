import React from 'react';
import * as S from './Submit.style';

const Submit = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return <S.Submit onClick={onSubmit}>Submit</S.Submit>;
};

export default Submit;
