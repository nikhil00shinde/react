// why we use here a functional component because in functional components we don't any form of data to be save in STATE that why we are here functional component here
let List = (props)=>{
    console.log(props);
    return (
       <ul>
        {
         props.tasks.map((el)=>{
            return <li>{el}{" "}
                <button onClick = {()=>{
                   props.deleteTask(el);
                }}>Delete</button>
            </li>
        })}

      </ul>
    );
}
export default List;