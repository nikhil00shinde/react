import React from "react";
import "./App.css"


class App extends React.Component{
     state = {
        tasks:["make coffee","make note"],
        currInput:""
     }

     render = () =>{

       return (

         <div>

           {/* jab bhi hum kuch bhi input tag mei type karte hain toh re-render hota hain */}

           <input
             type='text'

            //  adding class name
            className = "input-box"

             //  on typing

            onChange = {(e)=>{

              // to show on screen of input tag
              this.setState({currInput:e.currentTarget.value})

            }}

            onKeyDown = {(e)=>{
              if(e.key == 'Enter')
              {
                this.setState({
                  //hum directly push nhi kar sakte array mai toh humhe es prakar se karna padega
                  tasks:[...this.state.tasks,this.state.currInput],
                  currInput:""
                })
              }
            }}

           value = {this.state.currInput}
           />

           {/* adding the notes */}
           <ul>
            {/* map function return array toh array apne app UI pe add ho jaega */}
             {this.state.tasks.map((el)=>{
                 return <li>{el}</li>
             })}

           </ul>
         </div>
       )
     }
}

export default App;
