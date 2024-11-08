import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCalculator } from '../Context/CalculatorProvider'

const Calculator = () => {
    const {nums, changeNumberList} = useCalculator()
    const [currentNumber, setCurrentNumber] = useState(null)

    const addOneNumber = (newNumber) => {
        changeNumberList([...nums, newNumber])
        setCurrentNumber(newNumber)
    }

    useEffect(() => {
        changeNumberList([])
    }, [])

    return(
        <div>
            <h1>CALCULADORA</h1>
            <h2>{currentNumber && currentNumber}</h2>
            <div>
                <button onClick={() => addOneNumber(1)}>1</button>
                <button onClick={() => addOneNumber(2)}>2</button>
                <button onClick={() => addOneNumber(3)}>3</button>
                <button onClick={() => addOneNumber(4)}>4</button>
                <button onClick={() => addOneNumber(5)}>5</button>
                <button onClick={() => addOneNumber(6)}>6</button>
                <button onClick={() => addOneNumber(7)}>7</button>
                <button onClick={() => addOneNumber(8)}>8</button>
                <button onClick={() => addOneNumber(9)}>9</button>
                <button onClick={() => addOneNumber(0)}>0</button>
            </div>
            <Link to="/results">Resultados</Link>
        </div>
    )

}

export default Calculator