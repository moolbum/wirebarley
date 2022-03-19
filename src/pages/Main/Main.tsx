import React from 'react';
import List from './List';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Title>환율계산</S.Title>
        <List />
      </S.Container>
    </S.Main>
  );
};

export default Main;
