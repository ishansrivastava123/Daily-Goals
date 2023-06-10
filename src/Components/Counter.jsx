import React, {useState} from 'react'

function Counter() {
    const [inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(inputValue + 1);
    }
    
    const decrement = () => {
        setInputValue(inputValue - 1);
    }

    const buttonStyle = {
        padding: 10,
        margin: 10,
        border: "none",
        borderRadius: 3,
        cursor: "pointer"
    };

    return (
        <div>
            <button style={buttonStyle} onClick={increment}>+</button>
            <input style={{padding: 10, width: 60, textAlign: "center"}} placeholder="Enter any number!" type="number" onwheel="this.blur()" value={inputValue} />
            <button style={buttonStyle} onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;