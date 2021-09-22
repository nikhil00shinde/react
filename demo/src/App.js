import React from "react";
import "./App.css"
import List from "./List";

class App extends React.Component{
     state = {
        tasks:["make coffee","make note"],
        currInput:""
     }

     render = () =>{

       return (

         <div>


           <input
             type='text'

            className = "input-box"


            onChange = {(e)=>{

              this.setState({currInput:e.currentTarget.value})

            }}

            onKeyDown = {(e)=>{
              if(e.key == 'Enter')
              {
                this.setState({
                  tasks:[...this.state.tasks,this.state.currInput],
                  currInput:""
                })
              }
            }}

           value = {this.state.currInput}
           />
          
          {/* Props ->parent component apne children component ko data desakta hain using props
              
              props ko attributs ki tarah bhej sakte hain 

              props jha recieve hoga vha object form yani key value form mei recieve hoga
               
              maximum 3 props bhejna acha hota hain
          
          */}
          <List tasks ={this.state.tasks} y ={1}/>
          
         </div>
       )
     }
}

export default App;
