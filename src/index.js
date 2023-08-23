import React from 'react';
import ReactDOM from 'react-dom';
 import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/Context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="5787423e-d3a9-4316-938f-261f6822ec35" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  // <Provider>
  //     <App />
  //   </Provider>,
  document.getElementById('root'),
);
