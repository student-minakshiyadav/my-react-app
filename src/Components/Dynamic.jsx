
//Dynamic values in  jsx
/*1. Variables
we can embed any js variable within JSX by enclosing it in curly brace. the value of the variable will
be inserted into the dom at the reapective location.

const Dynamic=()=>{
    const name="Quen of tears";
    const rating = "8.2";
    const summary="this is quen of tears of the story of a cople that love togather .";
    return(
        <>
        <h2>name:{name}</h2>
        <h3>rating :{rating}</h3>
        <p>summary:{summary}</p>
        </>
    )
};   
    */

    /* 2. Expression
    jsx allows you to write javascript expression inside curly braces 
   this includes operations, function calls,and other javascript expression that produce a value 

   const Dynamic=()=>{
    const name="Quen of tears";
    //const rating = "8.2";
    const summary="this is quen of tears of the story of a cople that love togather .";
    return(
        <>
        <h2>name:{name}</h2>
        <h3>rating :{5+3.2}</h3>
        <p>summary:{summary}</p>
        </>
    )
}; */

/*3. function calls
functions especially those that return jsx can be invokke directly within your jsx.*/

const Dynamic=()=>{
    const name="Quen of tears";
    const rating = "8.2";
    const summary="this is quen of tears of the story of a cople that love togather .";
    const returnGenre =()=>{
        const genre = "RomCom";
        return genre;
    };
    return(
        <>
        <h2>name:{name}</h2>
        <h3>rating :{rating}</h3>
        <p>summary:{summary}</p>
        <p>Genre:{returnGenre()}</p>
        </>
    )
}; 


export default Dynamic;