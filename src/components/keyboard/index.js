import React, { Component } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import EventListener from 'react-event-listener';

import { Key, Row } from '../';

const Wrapper = styled.div`
`;

const ROW_DELIMITER = '|';


class Keyboard extends Component {
  state = {
    keysDown: [],
  }

  onClickKey = (key) => (ev) => {
    ev.preventDefault()
    this.onClick(key);
  }

  onClick = (key) => {
    if (this.props.onClick) {
      this.props.onClick(key)
    }
  }

  handleKeydown = ({ key }) => {
    console.log('clicked on ', key)
    this.onClick(key)
    const keysDown = [].concat(this.state.keysDown);
    const indexOfKey = keysDown.indexOf(key);
    if (indexOfKey === -1) {
      keysDown.push(key);
      this.setState({ keysDown });
    }
  }

  handleKeyUp = ({ key }) => {
    console.log('onKeyup -> ', key)
    const keysDown = [].concat(this.state.keysDown);
    const indexOfKey = keysDown.indexOf(key);
    if (indexOfKey > -1) {
      keysDown.splice(indexOfKey, 1);
      this.setState({ keysDown });
    }
  }

  renderRows = (rows) => {
    const { keysDown } = this.state;
    const rowsKeys = rows.split(ROW_DELIMITER);
    return rowsKeys.map((rowKeys, indexRow) => {
      return (
        <Row key={`row-${indexRow}`}>
          {rowKeys.split('').map((keyCharacter, indexKey) => {
            return (
              <Key
                label={keyCharacter}
                key={`key-${indexKey}`}
                onClick={this.onClickKey(keyCharacter)}
                className={classnames({ active: keysDown.indexOf(keyCharacter) > -1 })}
              />
            )
          })}
        </Row>
      )
    })
  }

  render() {
    const { listenKeyboard, layout } = this.props;
    console.log(this.state.keysDown)
    return (
      <Wrapper className="keyboard-wrapper">
        <EventListener
          target="document"
          onKeydown={this.handleKeydown}
          onKeyup={this.handleKeyUp}
        />
        {this.renderRows(layout)}
      </Wrapper>
    );
  }
}

Keyboard.defaultProps = {
  listenKeyboard: false,
  layout: '',
}

export default Keyboard;
