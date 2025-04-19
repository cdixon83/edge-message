import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

    onValue(dbRef, (response) => {
      //creating variable to store new state
      const newState = [];
      
      //store response from firebase query
      const data = response.val();
      
      //iterate through response to set up data
      for (let key in data) {
        //push each team to an array inside onValue function
        newState.push(data[key]);
      }

      //call setTeams to update component's state using the local array newState
      setTeams(newState);

    })
  }, [])
  return (
    <div>
      <ul>
        {teams.map((team) => {
          return (
            <li>
              <p>{team}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
