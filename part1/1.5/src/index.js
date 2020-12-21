import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  //rendering name of course
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  //renders parts and number of exercises
  const elements = [...props.parts];
  console.log(props);
  return (
    <>
      <Part data={elements[0]} />
      <Part data={elements[1]} />
      <Part data={elements[2]} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.data.name} {props.data.exercises}
    </p>
  );
};

const Total = (props) => {
  //renders total number of exercises
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
