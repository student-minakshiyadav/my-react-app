const Conditionst =()=>{
     const name="Quen of tears";
    const rating = "8.2";
    const summary="this is quen of tears of the story of a cople that love togather .";
    const age=19;
    const returnGenre =()=>{
        const genre = "RomCom";
        return genre;
    };

     
    //type=1;
    // return(
    //     <>
    //     <h2>name:{name}</h2>
    //     <h3>rating :{rating}</h3>
    //     <p>summary:{summary}</p>
    //     <p>Genre:{returnGenre()}</p>
    //     <button>{age>18?"watch now":"not awailable"}</button>
    //     </>
    // )

    //type 2
//   let canwatch="not awalable";
//      if(age>18) canwatch="watch now";
//     return(
//         <>
//         <h2>name:{name}</h2>
//         <h3>rating :{rating}</h3>
//         <p>summary:{summary}</p>
//         <p>Genre:{returnGenre()}</p>
//         <button>{canwatch}</button>
//         </>
//     )


//type==4
 let canwatch=()=>{
       if(age>=18)return canwatch="watch now";
       return "not awalable";
 }
 return(
        <>
        <h2>name:{name}</h2>
        <h3>rating :{rating}</h3>
        <p>summary:{summary}</p>
        <p>Genre:{returnGenre()}</p>
        <button>{canwatch()}</button>
        </>
    )

    
}
export default Conditionst;