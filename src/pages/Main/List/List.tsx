import React from 'react';
import * as S from './List.style';
import { listData } from '../data';

const List = () => {
  return (
    <S.List>
      {listData.map(data => {
        return (
          <S.ListTitle key={data.id}>
            {data.title}
            {data.option}
          </S.ListTitle>
        );
      })}
    </S.List>
  );
};

export default List;
