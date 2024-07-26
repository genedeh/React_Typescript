import './App.css';
import Greet from './components/Greet.component';
import Person from './components/Person.component';
import PersonList from './components/PersonList.component';
import Status from './components/Status.component';
import Heading from './components/Heading.component';

function App() {
  const personName = {
    first: "Genesis",
    last: "Enedeh"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]
  return (
    <div className="App">
      <Greet name="Genesis" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' /> 
      <Heading>Place Holder Text</Heading>
    </div>
  );
}

export default App;
