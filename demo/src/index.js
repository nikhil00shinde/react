
//Libraries

import React from 'react'; // creation logic (logic of react that is components banana/dikhna)

import ReactDOM from 'react-dom'; // render logic (shadow dom)

//App is a component we have imported
import App from './App';

ReactDOM.render(
    <App />, //ek component
  document.getElementById('root') // aur ek jagah jha us component ko dikhna hain
);
