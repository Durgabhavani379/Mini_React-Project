import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Interval from './Interval';
import Components from './Components';
import Netflix from './MiniProject_NetFlix/Netflix';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
 <Interval/>
  <App />
  <Components/>
  <Components/>
  <Netflix />
  </React.StrictMode>
);



