import styled from 'styled-components';

export const Button = styled.button`
  background-color: #d32f2f;
  color: white;
  padding: 0.5rem 1rem;
  font-family: inherit;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #d32f2fdf;
  }

  &:active {
    background-color: #d32f2fbf;
  }
`;