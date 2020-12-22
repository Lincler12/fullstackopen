import React, { useState } from "react";

const Display = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

	const onChangeHandler = (event) => setNewName(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		setPersons(persons.concat({name: newName}));
		setNewName('');
	}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {onSubmit}>
        <div>
          name: <input value={newName} onChange={onChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display persons={persons} />
    </div>
  );
};

export default App;
