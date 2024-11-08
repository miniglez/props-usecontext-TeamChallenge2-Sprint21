import RoutesApp from './Routes/RoutesApp';
import { CalculatorProvider } from './Context/CalculatorProvider';
import './App.css';

function App() {
  return (
    <>
        <CalculatorProvider>
          <RoutesApp />
        </CalculatorProvider>
    </>
  );
}

export default App;
