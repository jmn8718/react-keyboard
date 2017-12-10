import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
	outline: none;
	padding: 8px 10px;
	min-width: 40px;
	margin: 0 2px;
	background: #EEE;
	color: #666;
	cursor: pointer;
	font-family: inherit;
	font-size: inherit;
	border-radius: 2px;
  &:hover {
    background: #E0E0E0;
  }

  &:active {
    background: #777;
    color: #FFF;
    box-shadow: inset 0 1px 4px rgba(#000, 0.1);
  }
`;

const Key = ({ label, onClick, className }) => {
  return (
    <Wrapper
      className={classnames('keyboard-key', className)}
      onClick={onClick}
    >
      {label}
    </Wrapper>
  );
}

export default Key;
