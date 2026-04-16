import { useState } from "react";
export const TodoForm=({onAddTodo})=>{
      const [inputValue, setInputVlue] = useState({});

      const handleInputChange = (value) => {
        setInputVlue({id:value,content:value,cheked:false });
    };

    const handleFormSumbit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputVlue({id:"",content:"",checked:false});
    };
    return(
         <section className="form">
                <form onSubmit={handleFormSumbit}>
                    <div>
                        <input type="text" 
                        className="todo-input" 
                        autoComplete="off" 
                        value={inputValue.content} 
                        onChange={(event)=>handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="sumbit" className="toto-btn">
                            Add Task                       
                         </button>
                    </div>
                </form>
            </section>
    );
};