import React , {useState} from "react";
import './Calculator.css'

function Calculator(){
    var [value,setValue] = useState(0)
    var num1 = document.querySelector("#num1")
    var num2 = document.querySelector("#num2")

    function add(){
        setValue(Number(num1.value)+Number(num2.value))
        resetvalue()
    }
    function sub(){
        setValue(num1.value-num2.value)
        resetvalue()
    }
    function mul(){
        setValue(num1.value*num2.value)
        resetvalue()
    }
    function div(){
        setValue(num1.value/num2.value)
        resetvalue()
    }

    function resetvalue(){
        num1.placeholder = num1.value
        num2.placeholder = num2.value
        num1.value = null
        num2.value = null
    }

    return (
        <div className="Calculator">
             <input id="num1" type="number"  />
             <input id="num2" type="number"  />
            <p>{value}</p>

            <button onClick={add}>Add</button>
            <button onClick={sub}>Sub</button>
            <button onClick={mul}>Mul</button>
            <button onClick={div}>Div</button>
        </div>
    )
}

export default Calculator