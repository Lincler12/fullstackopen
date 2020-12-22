import React from 'react';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => {
		return sum += part.exercises;
	}, 0);
  return <p>Number of exercises {sum}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
		const parts = [...course.parts];
		const partsElements = parts.map(part => <Part key = {part.id} part = {part}/>)
  return (
    <div>
      {partsElements}
    </div>
  );
};


const Course = ({ courses }) => {
	const courseArray = courses.map(course => {
		return(
			<div key = {course.id}>
				<Header course={course} />
      	<Content course={course} />
      	<Total course={course} />
			</div>
		)
	})
	return (
		<>
			{courseArray}
		</>
  );
};


export default Course;