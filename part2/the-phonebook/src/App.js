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

const Filter = ({ value, change }) => {
  return (
    <div>filter shown with:{<input value={value} onChange={change} />}</div>
  );
};

const PersonForm = ({
  formHandler,
  nameValue,
  changeNameValue,
  numberValue,
  changeNumberValue,
}) => {
  return (
    <form onSubmit={formHandler}>
      <div>
        name: <input value={nameValue} onChange={changeNameValue} />
      </div>
      <div>
        number: <input value={numberValue} onChange={changeNumberValue} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
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
    if (event.target.value !== "") {
      setShowAll(false);
    }
  };

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
  const displayArrayElements = showAll
    ? persons
    : persons.filter((person) => person.name.indexOf(searchValue) > -1);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchValue} change={onChangeSearchHandler} />
      <h2>Add new</h2>
      <PersonForm
        formHandler={onSubmit}
        nameValue={newName}
        changeNameValue={onChangeNameHandler}
        numberValue={newNumber}
        changeNumberValue={onChangeNumberHandler}
      />
      <h2>Numbers</h2>
      <Display persons={displayArrayElements} />
    </div>
  );
};

export default App;
