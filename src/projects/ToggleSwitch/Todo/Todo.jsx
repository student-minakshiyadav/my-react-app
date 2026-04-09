import { useState } from "react";
import "./Todo.css";
import {MdCheck , MdDeleteForever} from "react-icons/md"
export const Todo = () => {
    const [inputValue, setInputVlue] = useState("");
    const [task,setTask]=useState([]);

    const handleInputChange = (value) => {
        setInputVlue(value);
    };

    const handleFormSumbit = (event) => {
        event.preventDefault();

      if(!inputValue) return;
      //... sepreta operator

      if(task.includes(inputValue)){
        setInputVlue(" ");
        return;
      }

      setTask((prevTask) => [...prevTask, inputValue]);
      setInputVlue("");

    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSumbit}>
                    <div>
                        <input type="text" 
                        className="todo-input" 
                        autoComplete="off" 
                        value={inputValue} 
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
            <section className="myUnOerdlist">
                <ul>
                    
                    {task.map((curTask,index)=>{
                        return(
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                            <button className="check-btn">
                                <MdCheck/>
                            </button>
                            <button className="delete-btn">
                                <MdDeleteForever/>
                            </button>
                            </li>
                        )
                    })};
                    
                </ul>
            </section>
        </section>
    )
}