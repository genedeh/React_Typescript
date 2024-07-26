import './App.css';
import Greet from './components/Greet.component';

function App() {
  return (
    <div className="App">
      <Greet name="Genesis" messageCount={20} isLoggedIn={true} />
    </div>
  );
}

export default App;
