import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Rishita" 
        School="Devi Public School" 
        total={294} 
        goal={3} 
      />
    </div>
  );
}

export default App;
