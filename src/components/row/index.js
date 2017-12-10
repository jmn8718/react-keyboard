import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2px 0;
	text-align: center;
`;

const Row = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Row;
