import './App.css';
import Greet from './components/Greet.component';
import Person from './components/Person.component';
function App() {
  const personName = {
    first: "Genesis",
    last: "Enedeh"
  }
  return (
    <div className="App">
      <Greet name="Genesis" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
