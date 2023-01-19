import React,{useState} from "react";
import './Hooks.css'




function Hooks(){
    var [value,setValue] = useState(1);
    // value = variable 
    // setValue = function  

    function addOne(){
        if(value==10) return ;
        setValue(++value)
    }
    function subOne(){
        if(value===0) return;
        setValue(--value)
    }
    function reset(){
        setValue(0)
    }


    return (
        <div className="Hooks">
            <p>Click on press me button to add value to the number</p>
            <p className="number">{value}</p>
            <button onClick={addOne}>Add</button>
            <button onClick={subOne}>subtract</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Hooks