import React from 'react';

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

export default PersonForm;