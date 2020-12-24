import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Display from "./components/Display";
import services from "./services";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    // axios.get("http://localhost:3001/persons")
    // .then(response => {
    //     console.log(response);
    //     setPersons(response.data);
    // })

    services.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

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
    const newPerson = { name: newName, number: newNumber };
    services.create(newPerson).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
    });
  };

  const onDeleteClickButton = (personParam) => {
    if (window.confirm(`Do you really want to delete ${personParam.name}`)) {
        services.remove(personParam.id).then(() => {
        setPersons(persons.filter(person => person.id !== personParam.id));
      });
    }
  };
  const displayArrayElements = showAll
    ? persons
    : persons.filter((person) => person.name.indexOf(searchValue) > -1);

  return (
    <>
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
      <Display persons={displayArrayElements} deleteHandler = {onDeleteClickButton}/>
    </>
  );
};

export default App;
