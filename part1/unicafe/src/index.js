import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name,onClickHandler}) => {
  return(
    <button onClick = {onClickHandler}>{name}</button>
  )
}

const Display = ({name, clickedNo}) => {
  return (
    <p>{name} {clickedNo}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);

  const handleNeutral = () => setNeutral(neutral + 1);

  const handleBad = () => setBad(bad + 1);

  const sum = good + neutral + bad;
  return (

    <div>
      <h1>Give feedback</h1>
      <Button name="good" onClickHandler={handleGood}/>
      <Button name="neutral" onClickHandler={handleNeutral}/>
      <Button name="bad" onClickHandler={handleBad}/>
      <h1>statistics</h1>
      <Display name = "good" clickedNo = {good}/>
      <Display name = "neutral" clickedNo = {neutral}/>
      <Display name = "bad" clickedNo = {bad}/>
      <Display name = "all" clickedNo = {sum}/>
      <Display name = "average" clickedNo = {(good-bad)/sum}/>
      <Display name = "positive" clickedNo = {100 * good / sum}/>

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)