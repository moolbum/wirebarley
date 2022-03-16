import React from 'react';
import Submit from '../../components/Submit';
import List from './List';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Title>환율계산</S.Title>
        <List />
        <Submit />
      </S.Container>
    </S.Main>
  );
};

export default Main;
