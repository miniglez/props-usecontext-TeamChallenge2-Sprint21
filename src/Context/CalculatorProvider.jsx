import { useContext, createContext, useState } from "react";

const CalculatorContext = createContext()

export const CalculatorProvider = ({children}) => {
    const [nums, setNums] = useState([])

    const changeNumberList = (newNumber) => {
        setNums(newNumber)
    }

    return(
        <CalculatorContext.Provider value={{nums, changeNumberList}}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => useContext(CalculatorContext)