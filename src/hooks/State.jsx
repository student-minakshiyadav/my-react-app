import { useState } from "react";
export const State=()=>{
    // let value=0;
    // const handleButtonclick=()=>{
    //     value++;
    //     console.log(value);
    // };
    const [count,setCount]=useState(0);
    console.log("parent Component renderd");
    const handleButtonclick=()=>{
        setCount(()=> count+1);
    };
    return(
        <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonclick}>Increment</button>

        </div>
        <ChildComponent count={count} />
        </>
    );
};

function ChildComponent({count}){
    console.log("child component rerenderd");
    return(
    <div className="main-div">
       <h2> child component-{count}</h2>
        </div>
    );
}



//represent array using state 
// export const State=()=>{
//     const[users,setCount]=useState([
//         {name:"alice",age:25},
//         {name:"bob",age:30},
//         {name:"charlie",age:35},
//         {name:"angles",age:45},
//     ]);
//     return(
//         <div className="main-div">
//             <h1>users list</h1>
//             <ul>
//                 {users.map((curElem, index)=>{
//                     return(
//                         <li key={index}>
//                             {curElem.name}={curElem.age}year old
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }