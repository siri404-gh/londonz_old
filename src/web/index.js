/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

render(<App />, document.getElementById('root'));
console.log(process.env);

// if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => { console.log('SW registered: ', registration); })
//       .catch(registrationError => { console.log('SW registration failed: ', registrationError); });
//   });
// }