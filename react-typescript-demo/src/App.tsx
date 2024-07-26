import './App.css';
import Greet from './components/Greet.component';
import Person from './components/Person.component';
import PersonList from './components/PersonList.component';
import Status from './components/Status.component';
import Heading from './components/Heading.component';
import Oscar from './components/Oscar.component';
import Button from './components/Button.components';

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
      <Oscar>
        <Heading>Oscar Goes To Space Since He is friends with Goku and the res of the shonen world.</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Buton Clicked', event, id)
      }}/>
    </div>
  );
}

export default App;
