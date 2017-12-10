import React, { Component } from 'react';
import styled from 'styled-components';

import { Keyboard, Input } from '../../components';

const Wrapper = styled.div`
  .keyboard-wrapper .keyboard-key {
    position: relative;
    background: #E3E3E3;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    transition: all 150ms ease-in-out;
    top: 0;
    padding: 10px 12px;
    font-weight: bold;

    &:hover {
      top: -2px;
      background: #FFF;
      box-shadow: 0 4px 6px rgba(0,0,0,0.15);
    }

    &:active {
      background: #EEE;
      color: #000;
      top: 1px;
    }
    &.active {
      background: #EEE;
      color: #000;
      top: 1px;
    }
  }
`;


const ROWS_F = '1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{reverse:reverse}';
const ROWS_M = '1234567890|qwertyuiop|asdfghjkl|zxcvbnm';
const ROWS = '123|456|789|0';

class KeyboardContainer extends Component {
  state = {
    input: '',
    layout: ROWS_M,
  }

  onClick = (value) => {
    console.log(value)
    let input = '';
    switch (value) {
      case 'Backspace':
        input = this.state.input.slice(0, -1);
        break;
      default:
        if (this.state.layout.indexOf(value) > -1) {
          input = this.state.input.concat(value);
        }
        break;
    }
    if (input) {
      this.setState({ input });
    }
  }

  render() {
    const { input, layout } = this.state;
    return (
      <Wrapper>
        <h2>Keyboard</h2>
        <Keyboard
          onClick={this.onClick}
          listenKeyboard={true}
          layout={layout}
        />
        <hr />
        <Input value={input} />
      </Wrapper>
    );
  }
}

export default KeyboardContainer;
