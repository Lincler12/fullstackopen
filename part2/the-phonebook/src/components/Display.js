import React from "react";

const DeleteButton = ({deleteHandler, personObj}) => {
  return <button onClick={() => deleteHandler(personObj)}>delete</button>;
};

const Display = ({ persons, deleteHandler }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          <div>
            {person.name} {person.number}
            <DeleteButton deleteHandler={deleteHandler} personObj={person} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Display;
