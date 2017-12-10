import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Keyboard } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Keyboard />, document.getElementById('root'));
registerServiceWorker();
