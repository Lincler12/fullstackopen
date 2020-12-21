import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({name, clickHandler}) => <button onClick = {clickHandler}>{name}</button>

const Display = ({quote}) => <p>{quote}</p>

const Vote = ({arrayNumber, votes, upVote}) => {
  return (
    <>
      <p>Has {votes[arrayNumber]} votes</p>
      <button onClick={upVote}>vote</button>
    </>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const random = () => {
   setSelected( Math.floor(Math.random() * anecdotes.length));
   console.log(selected);
  }
  const upVote = () => {
    const newArray = [...votes];
    newArray[selected]+=1;
    setVotes(newArray);
  }
  let maxIndex = 0;
  let maxValue = 0;
  for(let i = 0; i < votes.length; i++){
    if(votes[i] > maxValue){
      maxValue = votes[i]
      maxIndex = i;
    }
  }
  return (
    <div>
      <Display quote = {anecdotes[selected]}/>
      <Vote arrayNumber = {selected} votes = {votes} upVote = {upVote}/>
      <Button name = "random" clickHandler = {random}/>
      <p>{anecdotes[maxIndex]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


