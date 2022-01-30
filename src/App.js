import React , { useState } from "react";
const App = () => {
 const [inputlist, setinputlist] =  useState("buy apple");
 const [items , setitems] = useState([]);
 const listOfItems =()=>{
  setitems((oldItems)=>{
    return[...oldItems,inputlist];

  });

 };
 const itemEvent =(event)=>{
  setinputlist(event.target.value);


 };
    return (
    <>
    <div className="main-div">
      <div className="center_div">
        <br></br>
        <h1>to do list</h1>
        <hr/>
        <br/>
        <input type="text" placeholder="add the list" onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>
       <ol>
         {/* <li>{inputlist}</li> */}
       {  items.map((itemval) => {
           return <li>{itemval}</li>
          })}
       </ol>
      </div>
      
    </div>
    
    
 </>   
    );



};


export default App;