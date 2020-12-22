import React, { useState } from "react";

const Display = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
	const [searchValue, setSearchValue] = useState("");
	const [showAll, setShowAll] = useState(true);
  const onChangeNameHandler = (event) => setNewName(event.target.value);

  const onChangeNumberHandler = (event) => setNewNumber(event.target.value);

	const onChangeSearchHandler = (event) => {
		setSearchValue(event.target.value);
		setShowAll(true);
		if(event.target.value !== ""){
			setShowAll(false);
		}
	}

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
	};
	const displayArrayElements = showAll ? persons : persons.filter(person => person.name.indexOf(searchValue) > -1);
  return (
    <div>
      <h2>Phonebook</h2>
			<div>filter shown with: <input value = {searchValue} onChange={onChangeSearchHandler}/></div>
			<h2>Add new</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={onChangeNameHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onChangeNumberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display persons={displayArrayElements} />
    </div>
  );
};

export default App;
