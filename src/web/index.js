/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const isProd = process.env.NODE_ENV === 'production';
const component = isProd ? <ErrorBoundary><Routes /></ErrorBoundary> : <Routes />;

render(component, document.getElementById('root'));

// if ('serviceWorker' in navigator && isProd) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => { console.log('SW registered: ', registration); })
//       .catch(registrationError => { console.log('SW registration failed: ', registrationError); });
//   });
// }