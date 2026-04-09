// export const Practices=()=>{
//     const students=[];
//     return(
//         <>
//         <p>{students.length && "no student found"}</p>
//         <p>number of student :{students.length}</p>
//         </>
//     );
// };
/*react does not rander 'false','null','undefind ' or 'nan' in the dom
. these values when used in jsx will result in nothing being displayed.

However, '0' and empty strings('" "') are exceptions:

'0' is renderd in the dom because it is considerd a valid react node. this means that if '0' is the result of an expression,
it will appear in your ui <div className="

'empty string (" ")' are also considerd valid outputs aand are
renderd as well. */

//1st
// export const Practices=()=>{
//     const students=[];
//     return(
//         <>
//         <p>{students.length==0 && "no student found"}</p>
//         <p>number of student :{students.length}</p>
//         </>
//     );
// };

// //2nd
// export const Practices=()=>{
//     const students=[];
//     return(
//         <>
//         <p>{!students.length && "no student found"}</p>
//         <p>number of student :{students.length}</p>
//         </>
//     );
// };

//3rd
export const Practices=()=>{
    const students=[];
    return(
        <>
        <p>{!Boolean(students.length) && "no student found"}</p>
        <p>number of student :{students.length}</p>
        </>
    );
};

