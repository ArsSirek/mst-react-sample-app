import React from 'react';
import styled from 'styled-components';


export const CircleButton = styled.button`
  border:1px solid #000;
  
  width: 40px;
  height: 40px;
  font-size: 26px;

  border-radius:100%;
  position:relative;
  display:inline-block;
`;


export const AddButton = props => (
  <CircleButton {...props}>
    +
  </CircleButton>
);


export default AddButton;
