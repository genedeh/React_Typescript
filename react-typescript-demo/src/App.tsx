import './App.css';
import Greet from './components/Greet.component';
import Person from './components/Person.component';
import PersonList from './components/PersonList.component';
import Status from './components/Status.component';
import Heading from './components/Heading.component';
import Oscar from './components/Oscar.component';
import Button from './components/Button.components';
import Input from './components/Input.components';
import Container from './components/Container.components';
// import User from './components/state/User.components';

import Box from './components/context/Box.components';
import { ThemeContextProvider } from './components/context/ThemeContext.contexts';

import User from './components/context/User.components';
import { UserContextProvider } from './components/context/UserContext.contexts';
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Greet name="Genesis" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />
      <Oscar>
        <Heading>Oscar Goes To Space Since He is friends with Goku and the res of the shonen world.</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Buton Clicked', event, id)
      }} />

      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem', margin: '1rem' }} />
    </div>
  );
}

export default App;
