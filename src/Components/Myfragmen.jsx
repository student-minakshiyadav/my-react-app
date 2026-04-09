import React from "react";
const Myfragmen=()=>{
    // using array key 
    //  return [<NetflixSeres key="1"/> , <NetflixSeres key="2"/>];

    // //using fragment
    // return(
    //     <React.Fragment>
    //          <NetflixSeres/>
    //          <NetflixSeres/>
    //         <NetflixSeres/>
    //          //<NetflixSeres/>
    //      </React.Fragment>
    // )

    //syntactycal fragment eesy way

    return(
        <>
        <NetflixSeres/>
        <NetflixSeres/>
        <NetflixSeres/>
        </>
    )
    
};


const NetflixSeres=()=>{
    return(
        <div>
            <h2>Name:queen of tears</h2>
            <h3>rating :8</h3>
            <p>summry od fo tjprgeriog vndufgih gndfigdi sehuriw gjdog dsoirp rtjirotpr dnkfneliog </p>
        </div>
    );
};

export default Myfragmen;
