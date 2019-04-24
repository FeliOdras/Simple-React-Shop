import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import '@fortawesome/fontawesome-free/css/all.css';
import './sass/style.scss';

render(<App />, document.querySelector('#main'));
