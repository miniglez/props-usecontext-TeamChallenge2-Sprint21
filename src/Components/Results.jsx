import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCalculator } from '../Context/CalculatorProvider'


const Results = () => {
    const {nums} = useCalculator()
    const [resultSume, setResultSume] = useState(0)

    useEffect(() => {
        let sume = 0
        nums.forEach(element => {
            console.log(element)
            sume += element 
            
        });
        setResultSume(sume)
    }, [])

    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    return (
    <>
        <Link to="/">Calculadora</Link>
        <h1>Resultado</h1>
        <h2>{resultSume}</h2>
        <h3>Numeros usados: </h3>
        <ul>
            {nums.map((num) => <li>{num}</li>)}
        </ul>
    </>
    )
} 

export default Results