import * as React from 'react';
import styled, { css } from 'styled-components';
import { Cross } from '../icons/Cross';
import { Nought } from '../icons/Nought';

interface Props {
  onClick: () => void;
  value: 'x' | 'o' | '';
}

const WrapperDiv = styled.div<{ pointer: boolean }>`
  height: 100px;
  width: 100px;
  background-color: #1e1e1e;
  border-radius: 0.5rem;
  ${p => p.pointer && 'cursor: pointer;'}
`;

export const BoardItem = (props: Props) => {
  return (
    <WrapperDiv onClick={props.onClick} pointer={props.value === ''}>
      {props.value === 'x' ? <Cross /> : props.value === 'o' && <Nought />}
    </WrapperDiv>
  );
};
