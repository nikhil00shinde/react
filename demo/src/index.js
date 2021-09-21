
//Libraries

import React from 'react'; // creation logic (logic of react that is components banana/dikhna)

import ReactDOM from 'react-dom'; // render logic (shadow dom)

//App is a component we have imported
// import App from './App';

import MyComp from './MyComp';

ReactDOM.render(
    <MyComp />, //ek component
  document.querySelector('#root') // aur ek jagah jha us component ko dikhna hain
);
