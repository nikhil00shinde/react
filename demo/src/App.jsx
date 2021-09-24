import React from "react";
import "./App.css"
import List from "./List";
import Input from "./Input";

class App extends React.Component{
     state = {
        tasks:["make coffee","make note","go for a jog"],
        currInput:""
     }

    // we can send data from parent to child via props
    // But how we can send data from child to parent, so to that we have indirect way
    // that indirect way is passing function reference via props to child 
    // Data flows downward in REACT

    handleCurrInput = (el)=>{
          this.setState({currInput:el})
    }
     
   handleTask = ()=>{
       this.setState({
         tasks:[...this.state.tasks,this.state.currInput],
                      currInput:""})
   }

    deleteTask = (el) =>{
        let filteredTask = this.state.tasks.filter((element)=>{
                return el != element;
        })

        this.setState({tasks:filteredTask});
    }
   




     render = () =>{

       return (

         <div>

         <Input handleCurrInput = {this.handleCurrInput}  handleTask = {this.handleTask} currInput={this.state.currInput}/>
         
          <List tasks ={this.state.tasks} deleteTask={this.deleteTask}/>
          
         </div>
       )
     }
}

export default App;
