//3 chije - h1, p, ul

import React from "react";

// Whenever your state changes, the component will re-render
// jab bhi kisi bhi reason se aap es state namak cheej ko change karte ho toh ye render function phirse execute hota hain

class MyComp extends React.Component{

    state  = {
        someNumber:0,
    }

    render = () =>{
        return(
            <div>
                <button onClick =   { () => {

                    //whenever we want to change state we use setState({key:value}) function
                    this.setState({someNumber: this.state.someNumber + 1})   

                }}>
                    increment
                </button>
                <h1>{this.state.someNumber}</h1>
            </div>
        )
    };
}
export default MyComp;