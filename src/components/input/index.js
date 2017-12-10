import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  min-height: 18px;
  max-width: 260px;
  margin: 20px auto;
  text-align: center;
  padding: 16px 20px;
  border: none;
  border-radius: 2px;
  background: #888;
  color: #FFF;
  font-weight: bold;
  
  word-wrap: break-word;
  text-align: left;
`;

const Input = ({ value }) => (
  <Wrapper>
    {value}
  </Wrapper>
);

Input.defaultProps = {
  value: '',
}

export default Input;
