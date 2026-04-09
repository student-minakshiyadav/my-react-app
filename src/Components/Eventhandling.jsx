export const Eventhandling=()=>{
    // function handlebuttonclick(){
    //     alert("hi i am onclick event");
    // }

     const handlebuttonclick=(name)=>{
        console.log("event");
        alert(name);
    }
    return(
        <>
        <button onClick={handlebuttonclick}>click me</button>
        <br/>
        <button onClick={()=> handlebuttonclick()}>click me 2</button>
        <button onClick={()=> handlebuttonclick("mina")}>click3</button>
        
        </>
    );

};