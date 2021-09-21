
//Libraries

import React from 'react'; // creation logic (logic of react that is components banana/dikhna)

import ReactDOM from 'react-dom'; // render logic (shadow dom)

//App is a component we have imported
// import App from './App';

import MyComp from './MyComp';

// Hum multiple component use kar sakte hain
// har ek class ka object ka state different hoga
ReactDOM.render(
  <div>
     <MyComp />
     <MyComp />
     <MyComp />
     <MyComp />
  </div>
   , //ek component (hota hain)
  document.querySelector('#root') // aur ek jagah jha us component ko dikhna hain
);
