//3 chije - h1, p, ul

import React from "react";

// we are using class based components
// In Functional Components, We don't have STATE
// State is a piece of date stored in our components
// Jab hum class components bnate hain and hum us components ko use karte hain, jo usage hain na voh ek object hain
// jitni baar mei us components ko alag alag use karoonga toh alag object hain and can have different state


class MyComp extends React.Component{

    //  state is defined here with object
    // ek component mei ek hi state hoga, us state ke andhar multiple cheje ho sakti hai
    state  = {
        someNumber:2
    }


    // inside this class we have render function which doesn't use let keyword because inside class we cannot use let keyword for function
    // inside the render function whatever we return voh apki UI hoti hain 
    render = () =>{
        return(
            <div>
                {/* {}-> to access javascript inside the HTML we use currly braces */}
                {/* this -> refer to current object */}
                <h1>{this.state.someNumber}</h1>
            </div>
        )
    };
}
export default MyComp;