import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Calculator from "../Components/Calculator"
import Results from "../Components/Results"

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp