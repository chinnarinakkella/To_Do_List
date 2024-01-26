import React, { useState } from "react";

export default function InputContainer({addNewTodo}){
    const [inputValue, setInputValue] = useState("");

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <input style={{padding:'4px'}} 
            placeholder="add an item"
            value = {inputValue}
            onChange = {(e) => setInputValue(e.currentTarget.value)}
        />
        <button 
        style={{marginLeft: '10px'}}
        onClick={() => {
            addNewTodo(inputValue);
            setInputValue("");
        }}>
            add
        </button>
        </div>
    )
}