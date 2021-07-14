import * as React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <WrapperContainer>
    <div {...props} />
  </WrapperContainer>
);