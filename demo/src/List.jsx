
let List = (props)=>{
    console.log(props);
    return (
       <ul>
        {
         props.tasks.map((el)=>{
            return <li>{el}{" "}
                {/* <button onClick = {()=>{
                let currTaskArr = this.state.tasks;
                
                let filteredArr = currTaskArr.filter((element)=>{
                    return el != element;
                })

                this.setState({tasks:filteredArr});

                }}>Delete</button> */}
            </li>
        })}

      </ul>
    );
}
export default List;