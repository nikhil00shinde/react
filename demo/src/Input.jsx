
let Input = (props)=>{

     return ( <input
        type='text'

       className = "input-box"

       onChange = {(e)=>{

          props.handleCurrInput(e.currentTarget.value)

       }}

       onKeyDown = {(e)=>{
         if(e.key == 'Enter')
         {
           props.handleTask();
         }
       }}

      value = {props.currInput}
      />);
}

export default Input;